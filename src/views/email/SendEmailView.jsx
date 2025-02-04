import React, {useState} from "react";
import axios from "axios";
import config from "../../config.json";
import Page from "../Page/Page";
import {Box} from '@mui/material';

const SendEmailView = () => {
    const [recipientEmail, setRecipientEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [plainTextContent, setPlainTextContent] = useState("");
    const [htmlContent, setHtmlContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${config.API_BASE_URL}/api/emails/send`, {
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
        <Page>
            <Box
                sx={{
                    py: 10,
                    textAlign: "center",
                }}
            >

            <h1>Send Email or don't!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Recipient Email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    required
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
                <br />
                <br />
                <textarea
                    placeholder="Plain Text Content"
                    value={plainTextContent}
                    onChange={(e) => setPlainTextContent(e.target.value)}
                    required
                />
                <br />
                <br />
                <textarea
                    placeholder="HTML Content"
                    value={htmlContent}
                    onChange={(e) => setHtmlContent(e.target.value)}
                />
                <br />
                <br />
                <button type="submit">Send Email</button>
            </form>
            </Box>
        </Page>
    );
}

export default SendEmailView;
