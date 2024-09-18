import React from 'react';
import Button from '../../components/base/Button';
import InputField from '../../components/base/InputField';
import '../../app/globals.css'; 

interface EmailViewProps {
  email: string;
  subject: string;
  message: string;
  status: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setSubject: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setMessage: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EmailView: React.FC<EmailViewProps> = ({ email, subject, message, status, setEmail, setSubject, setMessage, handleSubmit }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Send Email</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            id="email"
            type="text"
            value={email}
            onChange={setEmail}
            label="Recipient Emails (comma-separated):"
            className="w-full"
          />
          <InputField
            id="subject"
            type="text"
            value={subject}
            onChange={setSubject}
            label="Subject:"
            className="w-full"
          />
          <InputField
            id="message"
            type="textarea"
            value={message}
            onChange={setMessage}
            label="Message:"
            className="w-full"
          />
          <Button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Send Email
          </Button>
        </form>
        {status && <p className="mt-6 text-center text-md text-gray-600">{status}</p>}
      </div>
    </div>
  );
};

export default EmailView;
