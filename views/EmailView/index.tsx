import React from "react";
import Button from "../../components/base/Button"; 
import InputField from "../../components/base/InputField"; 

interface EmailViewProps {
  email: string;
  subject: string;
  message: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setSubject: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setMessage: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  togglePreview: () => void; 
}

const EmailView: React.FC<EmailViewProps> = ({
  email,
  subject,
  message,
  setEmail,
  setSubject,
  setMessage,
  handleSubmit,
  togglePreview,
}) => {
  return (
    <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6">Send Email</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          id="emails"
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
          label="Message (HTML content allowed):"
          className="w-full"
        />

        {/* Button to trigger the HTML preview */}
        <Button
          type="button"
          onClick={togglePreview} // Toggle the HTML preview
          className="bg-yellow-500 text-white w-full"
        >
          Preview Email
        </Button>

        {/* Submit button to send the email */}
        <Button type="submit" className="bg-blue-600 text-white w-full">
          Send Email
        </Button>
      </form>
    </div>
  );
};

export default EmailView;
