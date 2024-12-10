"use client";
import { useState, useEffect } from "react";
import EmailFormContainer from "../EmailFormContainer";
import PreviewContainer from "../PreviewContainer";
import SaveTemplateContainer from "../SaveTemplateContainer";

interface Template {
  email: string;
  subject: string;
  message: string;
  id: number;
}

const EmailContainer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [status, setStatus] = useState("");
  const [templates, setTemplates] = useState<Template[]>([]);

  useEffect(() => {
    const savedTemplates = localStorage.getItem("emailTemplates");
    if (savedTemplates) {
      setTemplates(JSON.parse(savedTemplates));
    }
  }, []);

  useEffect(() => {
    if (templates.length > 0) {
      localStorage.setItem("emailTemplates", JSON.stringify(templates));
    }
  }, [templates]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message) {
      setStatus("Message is required!");
      return;
    }

    const emailData = {
      emailAddresses: email.split(",").map((email) => email.trim()),
      subject,
      message,
    };

    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        const result = await response.text();
        throw new Error(`Failed to send email: ${result}`);
      }

      setStatus("Email sent successfully!");
      resetForm();
    } catch (error: any) {
      console.error("Error sending email:", error);
      setStatus(`An error occurred: ${error.message}`);
    }
  };

  const resetForm = () => {
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const togglePreview = () => {
    if (!message) {
      alert("Message is required for preview!");
      return;
    }
    setShowPreview(!showPreview);
  };

  // Save the template
  const saveTemplate = () => {
    if (!message) {
      alert("Message is required to save the template.");
      return;
    }

    const newTemplate: Template = {
      email,
      subject,
      message,
      id: Date.now(),
    };

    setTemplates([...templates, newTemplate]); // Save the template
  };

  // Load a template back into the form
  const loadTemplate = (template: Template) => {
    setEmail(template.email);
    setSubject(template.subject);
    setMessage(template.message);
  };

  // Delete a template from the list
  const deleteTemplate = (id: number) => {
    const updatedTemplates = templates.filter((template) => template.id !== id);
    setTemplates(updatedTemplates);
  };

  return (
    <div className="container flex flex-wrap min-h-screen p-6">
      {/* Left Section: Form and Buttons */}
      <div className="left-section w-full md:w-1/2 p-8 bg-white shadow-md rounded-md mb-6">
        <EmailFormContainer
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

        {showPreview && (
          <div className="mt-6">
            <PreviewContainer message={message} togglePreview={togglePreview} />
          </div>
        )}

        {status && (
          <div className="mt-4 text-lg text-center text-green-600">
            <p>{status}</p>
          </div>
        )}
      </div>

      {/* Right Section: Saved Templates */}
      <div className="right-section w-full md:w-1/2 p-8 bg-gray-100 shadow-md rounded-md">
        <h3 className="text-xl font-bold mb-4">Saved Templates:</h3>
        <SaveTemplateContainer
          templates={templates}
          loadTemplate={loadTemplate}
          deleteTemplate={deleteTemplate}
        />
      </div>
    </div>
  );
};

export default EmailContainer;
