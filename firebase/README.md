# Contact form backend (Firebase)

The contact form on /contact saves each message to the Firestore collection `inquiries`. The
"Trigger Email from Firestore" extension watches that collection and emails each new document to
brandon@zweifeltech.com, with the sender's address as Reply-To.

Use a Firebase project of its own for the website (for example `zweifel-tech-site`), so these rules
never replace the rules of another app's database.

## One-time setup

1. **Project and web app.** In the Firebase console, create (or pick) the website project, then add a
   Web app under Project settings > Your apps. Copy `apiKey`, `authDomain`, `projectId` and `appId`
   into `src/lib/firebase-config.ts`.
2. **Firestore.** Build > Firestore Database > Create database (production mode, a US region).
3. **Rules.** From this folder: `firebase deploy --only firestore:rules --project <project-id>`.
4. **Email.** Install the extension "Trigger Email from Firestore" (`firebase/firestore-send-email`):
   - Email documents collection: `inquiries`
   - Default FROM address: a mailbox you can send from, for example `website@zweifeltech.com`
   - SMTP connection URI: for Google Workspace, `smtps://<user>@zweifeltech.com@smtp.gmail.com:465`
     with an app password stored as the extension's SMTP password secret
   The extension needs the Blaze (pay as you go) plan; at website volumes it costs nothing or close to it.
5. **Authorized domains.** Add `zweifel.tech` (and `localhost` for testing) under the API key's
   website restrictions in Google Cloud console > APIs & Services > Credentials.
6. Send a test message from http://localhost:8080/contact and check the inbox and the
   `inquiries` collection.

## Spam

The form has a hidden honeypot field, and the rules accept only well-formed documents addressed to
the company inbox. If spam gets through, turn on App Check with reCAPTCHA Enterprise for the web app.
