// Emails new contact-form messages from the website to the company inbox.
// The site saves each message to the Firestore collection "inquiries" (project zweifel-tech-site).
// This script runs every 5 minutes under your Workspace account, reads messages newer than the last
// one it sent, and emails each one with the visitor's address as Reply-To. Free; no Blaze plan needed.
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

  MailApp.sendEmail({
    to: INBOX,
    replyTo: email,
    name: "Zweifel Tech website",
    subject: `Website inquiry: ${topic}, from ${from}`.slice(0, 200),
    body: `${from} <${email}>\nTopic: ${topic}\n\n${body}`,
    htmlBody: `<p>${esc(from)} &lt;${esc(email)}&gt;<br>Topic: ${esc(topic)}</p><p style="white-space:pre-wrap">${esc(body)}</p>`,
  });
}
