"use client"
import React, { useState } from 'react';
import EmailView from '../../views/EmailView';

const EmailContainer = () => {
  const [emails, setEmails] = useState('');
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailArray = emails.split(',').map(email => email.trim()); 

    const response = await fetch('/api/sendemail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailAddresses: emailArray, subject }),
    });

    const data = await response.json();
    if (response.ok) {
      setStatus('Emails sent successfully!');
    } else {
      setStatus(`Error sending emails: ${data.message}`);
    }
  };

  return (
    <EmailView
      emails={emails}
      subject={subject}
      status={status}
      setEmails={(e) => setEmails(e.target.value)}
      setSubject={(e) => setSubject(e.target.value)}
      handleSubmit={handleSubmit}
    />
  );
};

export default EmailContainer;
