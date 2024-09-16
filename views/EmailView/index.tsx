import React from 'react';
import Button from '../../components/base/Button';
import InputField from '../../components/base/InputField';
import '../../app/globals.css'; 

interface EmailViewProps {
  emails: string;
  subject: string;
  status: string;
  setEmails: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSubject: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EmailView: React.FC<EmailViewProps> = ({ emails, subject, status, setEmails, setSubject, handleSubmit }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Send Email</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            id="emails"
            type="text"
            value={emails}
            onChange={setEmails}
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
