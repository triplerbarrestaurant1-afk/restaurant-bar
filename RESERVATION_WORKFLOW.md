# Triple R Bar Restaurant — Reservation Workflow

Short reference for how online reservations + 20€ deposits work on this website.

## How it works

### 1. Client submits the form on `reservations.html`
- A reservation number is auto-generated in the format `TRR-YYYYMMDD-XXXX`
  (example: `TRR-20260412-4827`)
- The form sends data via **FormSubmit.co** to: `triplerbarrestaurant1@gmail.com`

### 2. Two emails are sent automatically
- **To you** (`triplerbarrestaurant1@gmail.com`): booking details + reservation number + `paymentStatus: PENDING - awaiting Revolut deposit`
- **To the client** (auto-response): thank-you email with their reservation number, Revolut link (`https://revolut.me/rosali0avt`), and instructions to include the reservation number in the payment note.

### 3. Success screen on the website
- Shows the reservation number
- Big "Pay 20€ on Revolut" button
- Displays the Revolut URL as selectable text + "Copy Link" button as fallback

### 4. Client pays 20€ on Revolut
- They open Revolut, see your `rosali0avt` profile, send 20€
- They include the reservation number (e.g. `TRR-20260412-4827`) in the payment note

### 5. You confirm manually
- When you see the 20€ arrive in your Revolut app (with the reservation number in the note)
- Reply to the client's original reservation email:
  > *"Payment received — your table `TRR-20260412-4827` is confirmed for [date] at [time]. See you soon!"*
- **This step takes ~10 seconds per booking.**

---

## One-time setup you must do

FormSubmit requires you to **activate the auto-response feature** the first time:

1. Submit one test reservation using **your own email** as the client email.
2. FormSubmit will send an activation link to `triplerbarrestaurant1@gmail.com`.
3. Click the activation link.
4. After that, auto-reply works for all future reservations — forever.

---

## What to monitor

- **Revolut app**: match incoming 20€ payments to reservation numbers in the payment note.
- **Gmail inbox** (`triplerbarrestaurant1@gmail.com`): search "New Reservation" to find pending bookings.
- **If payment doesn't arrive within 24h**: call the client on the phone number they submitted.

---

## Why the confirmation is manual (not automatic)

The site is **static HTML** and `rosali0avt` is a **personal Revolut link**.
- Personal Revolut has no API / webhooks → site cannot detect payments.
- Automation would require: Revolut Business + API + backend server (not worth it for low volume).

### If you want full automation later
Two realistic paths:
1. **Revolut Business + API + backend** (~£25/mo + dev work) — fully automatic "paid & confirmed" email.
2. **Stripe Checkout** (1.4% + 0.25€ per transaction) — fully automatic, no dev work beyond integration.

**Recommendation for now**: stay manual until reservations exceed ~10/day.

---

## Risks of using a PERSONAL Revolut link for business payments

- **Account freeze risk**: Revolut's ToS restricts personal accounts to personal use. High-volume business inflows can trigger a review (account frozen for days).
- **Accounting**: business money mixed with personal money — your accountant will not be happy.
- **No dispute protection** for commercial transactions.

### Recommended next step (free, 1–2 days)
Open a **Revolut Business Lite** account (free plan, no monthly fee):
- Get a new business payment link (e.g. `revolut.me/triplerbar`)
- Replace all occurrences of `https://revolut.me/rosali0avt` in the site with the new link
- Clean separation of business revenue
- No risk of personal account freeze

---

## Files involved

| File | Role |
|---|---|
| `reservations.html` | Form, success overlay with Revolut button, auto-response setup |
| `index.html`, `about.html`, `menu.html`, `ambiance.html`, `blog.html` | Share the footer with phone +590 690 69 10 98 |
| FormSubmit.co | External email delivery service (no account needed, free) |

## Contact info used on the site

- **Email**: triplerbarrestaurant1@gmail.com
- **Phone**: +590 690 69 10 98
- **Address**: 31 rue de Sandy Ground, 97150 Saint Martin
- **Revolut**: https://revolut.me/rosali0avt *(personal — consider upgrading to Business Lite)*
