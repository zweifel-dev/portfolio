// Emails new contact-form messages from the website to the company inbox.
// The site saves each message to the Firestore collection "inquiries" (project zweifel-tech-site).
// This script runs every 5 minutes under your Workspace account, reads messages newer than the last
// one it delivered, and puts each one in the inbox, unread, with the visitor's address as Reply-To.
// Free; no Blaze plan needed.
// Setup: firebase/README.md, "Email with Apps Script".

const PROJECT_ID = "zweifel-tech-site";
const INBOX = "brandon@zweifeltech.com";
const LAST_KEY = "lastCreatedAt";

const TOPICS = {
  engagement: "A new project or engagement",
  training: "AI adoption training",
  support: "Help with Midnight Alibi or Vulpen Design",
  press: "Press or speaking",
  partnership: "Partnership",
  other: "Something else",
};

/** Run once by hand: creates the 5-minute trigger (and asks for permissions). */
function setup() {
  ScriptApp.getProjectTriggers()
    .filter((t) => t.getHandlerFunction() === "sendNewInquiries")
    .forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger("sendNewInquiries").timeBased().everyMinutes(5).create();
  sendNewInquiries();
}

function sendNewInquiries() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(30000)) return;
  try {
    const props = PropertiesService.getScriptProperties();
    const last = props.getProperty(LAST_KEY) || "1970-01-01T00:00:00Z";
    for (const doc of fetchSince(last)) {
      const f = doc.fields || {};
      const createdAt = f.createdAt && f.createdAt.timestampValue;
      if (!createdAt) continue;
      sendOne(f);
      props.setProperty(LAST_KEY, createdAt); // only after the email went out
    }
  } finally {
    lock.releaseLock();
  }
}

function fetchSince(last) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents:runQuery`;
  const res = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: `Bearer ${ScriptApp.getOAuthToken()}`,
      "x-goog-user-project": PROJECT_ID,
    },
    payload: JSON.stringify({
      structuredQuery: {
        from: [{ collectionId: "inquiries" }],
        where: { fieldFilter: { field: { fieldPath: "createdAt" }, op: "GREATER_THAN", value: { timestampValue: last } } },
        orderBy: [{ field: { fieldPath: "createdAt" }, direction: "ASCENDING" }],
        limit: 50,
      },
    }),
    muteHttpExceptions: true,
  });
  if (res.getResponseCode() !== 200) throw new Error(`Firestore ${res.getResponseCode()}: ${res.getContentText()}`);
  return JSON.parse(res.getContentText()).filter((r) => r.document).map((r) => r.document);
}

function sendOne(f) {
  const s = (k) => (f[k] && f[k].stringValue) || "";
  const name = s("name");
  const email = s("email");
  const org = s("organization");
  const topic = TOPICS[s("topic")] || s("topic");
  const body = s("body");
  const from = org ? `${name} (${org})` : name;
  const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Gmail files mail you send to yourself under Sent only, so instead of sending, put the message straight
  // into the inbox, unread (Gmail API insert; needs only the gmail.insert permission).
  const raw = buildMessage({
    from: `Zweifel Tech website <${INBOX}>`,
    to: INBOX,
    replyTo: email,
    subject: `Website inquiry: ${topic}, from ${from}`.slice(0, 200),
    text: `${from} <${email}>\nTopic: ${topic}\n\n${body}`,
    html: `<p>${esc(from)} &lt;${esc(email)}&gt;<br>Topic: ${esc(topic)}</p><p style="white-space:pre-wrap">${esc(body)}</p>`,
  });
  Gmail.Users.Messages.insert({ raw, labelIds: ["INBOX", "UNREAD"] }, "me", null, { internalDateSource: "receivedTime" });
}

function buildMessage(m) {
  const b64 = (t) => Utilities.base64Encode(t, Utilities.Charset.UTF_8);
  const header = (t) => `=?UTF-8?B?${b64(t)}?=`;
  const boundary = `b${Utilities.getUuid().replace(/-/g, "")}`;
  const safe = (t) => t.replace(/[\r\n]+/g, " ");
  const lines = [
    `From: ${m.from}`,
    `To: ${m.to}`,
    `Reply-To: ${safe(m.replyTo)}`,
    `Subject: ${header(safe(m.subject))}`,
    `Date: ${new Date().toUTCString()}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    b64(m.text),
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    b64(m.html),
    `--${boundary}--`,
  ];
  return Utilities.base64EncodeWebSafe(lines.join("\r\n"), Utilities.Charset.UTF_8);
}
