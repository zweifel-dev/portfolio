// The Firebase web app the contact form writes to. These values are public by design (they identify the project;
// Firestore security rules in firebase/firestore.rules decide what a visitor may write). Fill them in from
// Firebase console > Project settings > Your apps > Web app. While apiKey is empty the form says it is not set up yet.
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  appId: "",
};

export const inquiriesConfigured = () => Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
