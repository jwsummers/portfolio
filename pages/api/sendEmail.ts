import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await sendgrid.send({
      to: 'jwsummers.dev@gmail.com',
      from: 'jwsummers.dev@gmail.com',
      subject: `New message from ${req.body.name}`,
      html: `
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${req.body.message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
      return res.status(500).json({ success: false, error: error.message });
    } else {
      console.error('Unexpected error:', error);
      return res.status(500).json({ success: false, error: 'An unexpected error occurred' });
    }
  }
};

export default sendEmail;
