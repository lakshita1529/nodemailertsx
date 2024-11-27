"use client"
import React, { useState } from "react";
import EmailView from "../../views/EmailView"; 

const EmailFormContainer = () => {
  const [email, setEmail] = useState(""); 
  const [subject, setSubject] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [showPreview, setShowPreview] = useState(false); 
  const [status, setStatus] = useState("");

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  

    const emailData = {
      emailAddresses: email.split(',').map(email => email.trim()), 
      subject: subject,
      message: message,
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

      const result = await response.json();
      setStatus("Email sent successfully!");

    } catch (error: any) {
      console.error("Error sending email:", error);
      setStatus(`An error occurred: ${error.message}`);
    }
  };


  const togglePreview = () => {
    setShowPreview(!showPreview); 
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 min-h-screen">
      <EmailView
        email={email}
        subject={subject}
        message={message}
        setEmail={(e) => setEmail(e.target.value)}
        setSubject={(e) => setSubject(e.target.value)}
        setMessage={(e) => setMessage(e.target.value)}
        handleSubmit={handleSubmit}
        togglePreview={togglePreview}
      />


      {showPreview && (
        <div className="mt-6 p-4 w-full max-w-md border border-gray-300 rounded-md bg-white">
          <h3 className="text-xl font-bold mb-4">Email Preview:</h3>
          <div dangerouslySetInnerHTML={{ __html: message }} /> 
        </div>
      )}

     
      {status && (
        <div className="mt-4 text-lg text-center">
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default EmailFormContainer;
