import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import nodemailerExpressHandlebars from 'nodemailer-express-handlebars';
import path from 'path';

const emailUser = process.env.EMAIL_USER!;
const emailPass = process.env.EMAIL_PASS!;

const transporter = nodemailer.createTransport({
  service: 'gmail',
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
    const { email, subject, message, user } = await req.json();

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

    // Send the email function
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
