import React, { useState } from "react";
import axios from "axios";

function App() {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [plainTextContent, setPlainTextContent] = useState("");
  const [htmlContent, setHtmlContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:7271/api/emails/send", {
        recipientEmail,
        subject,
        plainTextContent,
        htmlContent,
      });
      alert("Email sent successfully!");
    } catch (error) {
      alert("Error sending email.");
    }
  };

  return (
      <div>
        <h1>Send Email</h1>
        <form onSubmit={handleSubmit}>
          <input
              type="email"
              placeholder="Recipient Email"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              required
          />
          <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
          />
          <textarea
              placeholder="Plain Text Content"
              value={plainTextContent}
              onChange={(e) => setPlainTextContent(e.target.value)}
              required
          />
          <textarea
              placeholder="HTML Content"
              value={htmlContent}
              onChange={(e) => setHtmlContent(e.target.value)}
          />
          <button type="submit">Send Email</button>
        </form>
      </div>
  );
}

export default App;
