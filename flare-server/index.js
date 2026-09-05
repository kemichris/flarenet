import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import { Resend } from 'resend';

const app = express();
const port = Number(process.env.PORT) || 3000;

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/api/connect', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      error: 'message required',
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Your App <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO],
      subject: 'New Form Submission',
      text: `Message: ${message}`,
    });

    if (error) {
      console.error('Resend error:', error);

      return res.status(500).json({
        error: 'Unable to send email',
      });
    }

    return res.status(201).json({
      message: 'Email sent successfully',
      data,
    });
  } catch (error) {
    console.error('Email error:', error);

    return res.status(500).json({
      error: 'Unable to send email',
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});