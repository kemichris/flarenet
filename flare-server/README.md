# Form-to-email server

## Setup

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and enter your Gmail details.
3. In your Google Account, enable two-step verification, then create a **Google App Password**. Put that generated 16-character value in `GMAIL_APP_PASSWORD`; do not use your regular Gmail password.
4. Start the server: `npm run dev`

Open `http://localhost:3000` to use the included test form. Your frontend can submit JSON to `POST /api/contact` with `name`, `email`, and `message`.
