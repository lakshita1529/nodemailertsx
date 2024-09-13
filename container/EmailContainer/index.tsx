"use client"
import React, { useState } from 'react';
import EmailView from '../../views/EmailView';

const EmailContainer = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/sendemail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, subject }),
    });

    const data = await response.json();
    if (response.ok) {
      setStatus('Email sent successfully!');
    } else {
      setStatus(`Error sending email: ${data.message}`);
    }
  };

  return (
    <EmailView
      email={email}
      subject={subject}
      status={status}
      setEmail={(e) => setEmail(e.target.value)}
      setSubject={(e) => setSubject(e.target.value)}
      handleSubmit={handleSubmit}
    />
  );
};

export default EmailContainer;
