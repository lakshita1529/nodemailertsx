"use client"
import React, { useState } from 'react';
import EmailView from '../../views/EmailView'; // Import the View component

const EmailFormContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailData = {
      emailAddresses: email.split(',').map(email => email.trim()),
      subject: subject,
      message: message,
    };

    try {
      const response = await fetch('/api/sendemail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('Emails sent successfully!');
      } else {
        setStatus(`Error sending emails: ${data.message}`);
      }
    } catch (error) {
      setStatus('Error sending emails');
      console.error('Error sending emails:', error);
    }
  };

  return (
    <EmailView
      email={email}
      subject={subject}
      message={message}
      status={status}
      setEmail={(e) => setEmail(e.target.value)}
      setSubject={(e) => setSubject(e.target.value)}
      setMessage={(e) => setMessage(e.target.value)}
      handleSubmit={handleSubmit}
    />
  );
};

export default EmailFormContainer;
