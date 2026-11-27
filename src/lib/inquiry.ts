// Sends a contact-form inquiry. It is saved as one document in the Firestore "inquiries" collection; the
// "Trigger Email from Firestore" extension, set to watch that collection, emails it to the company address
// with the visitor's email as Reply-To. Setup steps are in firebase/README.md.
import { company } from "./company";
import { firebaseConfig } from "./firebase-config";

export const topics = [
  { value: "engagement", label: "A new project or engagement" },
  { value: "training", label: "AI adoption training" },
  { value: "support", label: "Help with Midnight Alibi or Vulpen Design" },
  { value: "press", label: "Press or speaking" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Something else" },
] as const;

export type Topic = (typeof topics)[number]["value"];

export interface Inquiry {
  name: string;
  email: string;
  organization: string;
  topic: Topic;
  /** What the visitor wrote */
  body: string;
}

export const limits = { name: 100, email: 200, organization: 120, body: 5000 };

const escapeHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function sendInquiry(inquiry: Inquiry): Promise<void> {
  // Loaded on submit, so visitors who never send a message don't download the Firebase SDK
  const [{ initializeApp, getApps }, { getFirestore, collection, addDoc, serverTimestamp }] = await Promise.all([
    import("firebase/app"),
    import("firebase/firestore/lite"),
  ]);
  const app = getApps()[0] ?? initializeApp(firebaseConfig);
  const topicLabel = topics.find((t) => t.value === inquiry.topic)?.label ?? inquiry.topic;
  const from = inquiry.organization ? `${inquiry.name} (${inquiry.organization})` : inquiry.name;
  const text = `${from} <${inquiry.email}>\nTopic: ${topicLabel}\n\n${inquiry.body}`;

  await addDoc(collection(getFirestore(app), "inquiries"), {
    name: inquiry.name,
    email: inquiry.email,
    organization: inquiry.organization,
    topic: inquiry.topic,
    body: inquiry.body,
    createdAt: serverTimestamp(),
    // Read by the Trigger Email extension
    to: company.email,
    replyTo: inquiry.email,
    message: {
      subject: `Website inquiry: ${topicLabel}, from ${from}`.slice(0, 200),
      text,
      html: `<p>${escapeHtml(from)} &lt;${escapeHtml(inquiry.email)}&gt;<br>Topic: ${escapeHtml(topicLabel)}</p><p style="white-space:pre-wrap">${escapeHtml(inquiry.body)}</p>`,
    },
  });
}
