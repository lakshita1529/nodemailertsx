import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const emailUser = process.env.EMAIL_USER!;
const emailPass = process.env.EMAIL_PASS!;

const smtpTransport = {
  host: 'smtp.zoho.in',
  port: 465,
  secure: true,
  auth: {
    user: emailUser,
    pass: emailPass,
  },
};

const transporter = nodemailer.createTransport(smtpTransport);

export async function POST(req: NextRequest) {
  try {
    const { emailAddresses, subject, message } = await req.json();

    if (!Array.isArray(emailAddresses)) {
      throw new Error('Invalid email addresses format');
    }

    const emailPromises = emailAddresses.map((email: string) => {
      const mailOptions = {
        from: `"admin" <${emailUser}>`,
        to: email,
        subject: subject,
        html: message, 
      };

      return transporter.sendMail(mailOptions);
    });

    await Promise.all(emailPromises);

    return NextResponse.json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json({ message: 'Error sending emails' }, { status: 500 });
  }
}
