# Vercel setup: Sustainability Hackathon interest form

The native Enough form and its Next.js/Vercel submission endpoint are implemented in this checkout. Steps 1–4 configure Vercel; steps 5–6 deploy and verify the updated website code.

The connection is: **Enough form → Vercel server → Google Apps Script → your existing Google Form**.

## 1. Open the Gimbalabs project

Sign in to [Vercel](https://vercel.com/dashboard), open the project serving **gimbalabs.com**, and go to **Settings → Environment Variables**.

Add these variables to this project. Keep your existing variables, such as `DATABASE_URL`, as they are.

## 2. Add the bridge URL

Create a variable with these settings:

| Setting      | Enter this                                 |
| ------------ | ------------------------------------------ |
| Name / Key   | `SUSTAINABILITY_INTEREST_BRIDGE_URL`       |
| Type         | **Config**                                 |
| Environments | **Production** and **Preview**             |
| Value        | The complete Apps Script Web app URL below |

```text
https://script.google.com/macros/s/AKfycbyVLnnROP1aBlytFJrNwU0cpy--v4LZEvUUTev7Y0v8Hpplazq4vb77gvSGru3JpZBb/exec
```

Paste the URL without quotation marks or spaces, then click **Save**. This is the Apps Script URL ending in `/exec`, rather than the Google Form's `viewform` URL.

## 3. Add the bridge secret

Create a second variable:

| Setting      | Enter this                                    |
| ------------ | --------------------------------------------- |
| Name / Key   | `SUSTAINABILITY_INTEREST_BRIDGE_SECRET`       |
| Type         | **Secret**                                    |
| Environments | **Production** and **Preview**                |
| Value        | The value of `BRIDGE_SECRET` from Apps Script |

Find the value in **Apps Script → Project Settings → Script properties → BRIDGE_SECRET**. Use the same value you put in your local `.env.local` file. Copy only the value, without quotation marks or surrounding spaces, then click **Save**.

If your dashboard has a **Sensitive** toggle instead of a Secret type, enable it for this variable. Vercel hides saved Secret values. [Vercel's Config and Secret guide](https://vercel.com/docs/environment-variables/sensitive-environment-variables)

Use the exact variable names above, with no `NEXT_PUBLIC_` prefix. The secret belongs on the server. You do not need to send its value in this chat.

## 4. Confirm the settings

Check that both names appear in the project's Environment Variables list:

```text
SUSTAINABILITY_INTEREST_BRIDGE_URL
SUSTAINABILITY_INTEREST_BRIDGE_SECRET
```

Confirm that both apply to **Production** and **Preview**. These environments will use the same Google Form, so intentional preview submissions will also appear in that form's Responses tab.

That completes the Vercel configuration. The updated website code must also be deployed for the native form to appear.

## 5. Deploy the updated website code

After local verification, deploy the updated commit containing the native form and endpoint through your existing Git-connected Vercel workflow. Wait for the production deployment to show **Ready**.

Vercel applies environment changes to new deployments. If you change either variable after a deployment has built, create a new deployment or redeploy the updated commit. [Vercel's environment variable guide](https://vercel.com/docs/environment-variables/managing-environment-variables)

## 6. Check the live form

Open [the interest page](https://www.gimbalabs.com/sustainability-hackathon-interest).

Check that it shows the Enough email field, activity description field, and blue **Show interest** button. Make one intentional test submission, confirm the success message, then open your Google Form's **Responses** tab and confirm the response arrived.

The registration-opening announcement will still need to be sent by the organizers later; recording interest does not send that future email automatically.

## If the form returns 503

The message **“The interest form is temporarily unavailable”** means the website rejected its server configuration before contacting Google. A successful Vercel build does not verify these runtime settings.

For a read-only check without Vercel credentials, open [the configuration health check](https://www.gimbalabs.com/api/sustainability-hackathon-interest?health=1). It returns `configured: true` when the URL and secret pass validation, or `configured: false` with the codes below. It never returns their values, contacts Google, or saves a form response. This checks configuration presence and format; it does not verify Google authorization or a successful save.

Open the Gimbalabs project's **Logs**, find the failed request to `/api/sustainability-hackathon-interest`, and look for **`[sustainability-interest] Invalid server configuration`**. The log reports the deployment environment, commit, and one or more of these codes without printing values:

| Code                                                   | Fix                                                                                                                        |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `MISSING_SUSTAINABILITY_INTEREST_BRIDGE_URL`           | Add the exact URL variable name to the deployment's environment.                                                           |
| `INVALID_SUSTAINABILITY_INTEREST_BRIDGE_URL`           | Paste only the HTTPS Apps Script Web app URL ending in `/exec`, without quotes or `NAME=`.                                 |
| `MISSING_SUSTAINABILITY_INTEREST_BRIDGE_SECRET`        | Add the exact secret variable name to the deployment's environment.                                                        |
| `INVALID_SUSTAINABILITY_INTEREST_BRIDGE_SECRET_FORMAT` | Paste the complete `BRIDGE_SECRET` value generated by `setupBridge`: 64 hexadecimal characters, without quotes or `NAME=`. |

Save any correction and redeploy. Git auto-deploy runs when a new commit is pushed; saving an environment variable does not update an existing deployment. Keep secret values hidden when sharing log screenshots.
