import React from "react";
import EmailForm from "../../views/EmailFormView";

interface EmailFormContainerProps {
  email: string;
  subject: string;
  message: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  togglePreview: () => void;
  saveTemplate: () => void;
}

const EmailFormContainer: React.FC<EmailFormContainerProps> = ({
  email,
  subject,
  message,
  setEmail,
  setSubject,
  setMessage,
  handleSubmit,
  togglePreview,
  saveTemplate,
}) => {
  return (
    <EmailForm
      email={email}
      subject={subject}
      message={message}
      setEmail={setEmail}
      setSubject={setSubject}
      setMessage={setMessage}
      handleSubmit={handleSubmit}
      togglePreview={togglePreview}
      saveTemplate={saveTemplate}
    />
  );
};

export default EmailFormContainer;
