# Contact form backend (Firebase)

The contact form on /contact saves each message to the Firestore collection `inquiries`. A Google
Apps Script under the company Workspace account (`apps-script/`) checks that collection every five
minutes and puts each new message in the inbox to brandon@zweifeltech.com, with the sender's address as Reply-To.
Everything stays on the free Spark plan.

Use a Firebase project of its own for the website (`zweifel-tech-site`), so these rules
never replace the rules of another app's database.

## One-time setup

1. **Project and web app.** In the Firebase console, create (or pick) the website project, then add a
   Web app under Project settings > Your apps. Copy `apiKey`, `authDomain`, `projectId` and `appId`
   into `src/lib/firebase-config.ts`.
2. **Firestore.** Build > Firestore Database > Create database (production mode, a US region).
3. **Rules.** From this folder: `firebase deploy --only firestore:rules --project <project-id>`.
4. **Email with Apps Script.** Signed in to the Workspace account that owns the Firebase project:
   - Open https://script.google.com, create a project named "Website inquiries".
   - Project Settings: tick "Show appsscript.json manifest file in editor".
   - Replace `Code.gs` and `appsscript.json` with the files in `apps-script/`.
   - Choose the function `setup` and press Run (not Deploy). Approve the permissions (Firestore,
     add mail to your inbox, triggers). It creates a 5-minute trigger and delivers any messages waiting.
   - Errors show under Executions in the script editor.
   The script remembers the newest message it delivered, so each message arrives once. It inserts the
   message into your inbox (unread) instead of sending it, because Gmail files mail you send to your
   own address under Sent only. The manifest turns on the Gmail advanced service.
   (Alternative: the "Trigger Email from Firestore" extension. It needs the Blaze plan, and the
   documents already carry its `to`, `replyTo` and `message` fields.)
5. **Authorized domains.** Add `zweifel.tech` (and `localhost` for testing) under the API key's
   website restrictions in Google Cloud console > APIs & Services > Credentials.
6. Send a test message from http://localhost:8081/contact and check the inbox and the
   `inquiries` collection.

## Spam

The form has a hidden honeypot field, and the rules accept only well-formed documents addressed to
the company inbox. If spam gets through, turn on App Check with reCAPTCHA Enterprise for the web app.
