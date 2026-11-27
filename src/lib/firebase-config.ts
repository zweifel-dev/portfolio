// The Firebase web app the contact form writes to. These values are public by design (they identify the project;
// Firestore security rules in firebase/firestore.rules decide what a visitor may write). Project zweifel-tech-site,
// web app "Zweifel Tech website". While apiKey is empty the form says it is not set up yet.
export const firebaseConfig = {
  apiKey: "AIzaSyD8GnNQmdRCFz7MgVQsbw-FOZqduVInv5k",
  authDomain: "zweifel-tech-site.firebaseapp.com",
  projectId: "zweifel-tech-site",
  appId: "1:292007485957:web:1f57b0c9e5e6696731b26c",
};

export const inquiriesConfigured = () => Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
