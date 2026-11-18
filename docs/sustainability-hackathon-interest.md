# Sustainability Hackathon interest page

Route: `/sustainability-hackathon-interest`. It is available by direct URL; the homepage link is deferred.

The page uses the native Enough form rather than an embedded Google Form. It preserves the approved copy, Gimbalabs SVG, Enough font, light/dark palettes, clipped fields and blue button, threshold illustration, responsive ordering, line-sized text backings, pointer background, randomized halos, and flat 18% card tint. Styles and interactions are scoped to this page and cleaned up on navigation.

The original registration source at `/Users/gzero/Desktop/TheSustainabilityHackathon/registration/` remains a read-only reference. Its registration database is not used or accessed.

## Form and submission

Exactly two fields are required:

1. **Email address** — a valid email address, up to 254 characters.
2. **What would you like to make sustainable?** — activity and financial support details, up to 2,000 characters.

The client and server share validation. Written errors, dashed field borders, and focus on the first invalid field explain corrections. While sending, the button prevents duplicate clicks and fields remain readable. A confirmation appears only after the Google bridge confirms a saved response. Errors preserve the entered details so the visitor can retry.

Submission flow: **native Enough form → `/api/sustainability-hackathon-interest` on Next.js/Vercel → Google Apps Script → the existing Google Form**.

The endpoint accepts same-origin JSON POST requests, limits body size, validates both fields, restricts the upstream destination to an HTTPS Apps Script deployment, and applies a timeout. The bridge private key is added only on the server. It is not included in page props, browser JavaScript, or browser requests. Other pages and shared styles do not use these settings.

JavaScript-disabled visitors have a link to the public Google Form. With JavaScript enabled, Google’s iframe, styling, and sign-in prompts are absent from the page.

## Local settings

Use `.env.local`, which is ignored by Git:

```dotenv
SUSTAINABILITY_INTEREST_BRIDGE_URL="YOUR_APPS_SCRIPT_WEB_APP_URL_ENDING_IN_EXEC"
SUSTAINABILITY_INTEREST_BRIDGE_SECRET="YOUR_BRIDGE_SECRET_VALUE"
```

The secret is the value of `BRIDGE_SECRET` in the form’s Apps Script **Project Settings → Script properties**. Neither setting uses `NEXT_PUBLIC_`. The earlier iframe setting `NEXT_PUBLIC_SUSTAINABILITY_INTEREST_FORM_URL` is no longer used.

The Apps Script deployment must execute as the form owner and allow access to **Anyone**. Its `doPost` checks the private key and both fields before saving. Missing or invalid website settings produce an unavailable message for this form without affecting other pages.

For production configuration, follow the [Vercel setup guide](vercel-sustainability-interest-setup.md). New environment values take effect on a new deployment.

## Local preview

```sh
npm run typecheck
npm run build
npm run start -- --hostname 127.0.0.1 --port 3000
```

Open `http://127.0.0.1:3000/sustainability-hackathon-interest`. For live code editing, use `npm run dev -- --hostname 127.0.0.1 --port 3000` instead of the build/start commands.

Verify desktop/mobile layout, keyboard focus, validation, card tint stability, text/icon/logo halos, pointer response with a field focused, and navigation back to the homepage without styles or canvas leaking into other pages.

Connection checks can use the bridge’s `doGet` readiness response and an authenticated POST containing only the secret. The latter must return `invalid_fields`, confirming authentication without creating a response. Full successful submission handling can be tested against a mocked bridge; a real successful submission should be intentional and verified in the Google Form’s Responses tab.

Organizers will still send the registration-opening announcement later. Recording interest does not automatically send that future email.
