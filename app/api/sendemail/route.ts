import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import nodemailerExpressHandlebars from 'nodemailer-express-handlebars';
import path from 'path';
import emailAddresses from '../../../data/emails.json'; 

const emailUser = process.env.EMAIL_USER!;
const emailPass = process.env.EMAIL_PASS!;

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.in',
  port: 465,
  secure: true,
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

const handlebarOptions = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: path.resolve(process.cwd(), 'app/emails'),
    defaultLayout: false,
  },
  viewPath: path.resolve(process.cwd(), 'app/emails'),
  extName: '.hbs',
};

transporter.use('compile', nodemailerExpressHandlebars(handlebarOptions));

export async function POST(req: NextRequest) {
  try {
    const { subject, message, user } = await req.json();

    const emailPromises = emailAddresses.map((email: string) => {
      const mailOptions = {
        from: `"admin" <${emailUser}>`,
        to: email,
        subject: subject,
        template: 'welcome',
        context: {
          user,
          message,
        },
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
