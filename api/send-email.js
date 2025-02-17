const nodemailer = require('nodemailer');
require('dotenv').config();

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://triangleasphalt-4b0f2.web.app');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        // Respond to preflight request
        return res.status(200).end();
    }
    if (req.method === 'POST') {
        const { name, email, inquiryType, message } = req.body;

        const inquiryText = Array.isArray(inquiryType) ? inquiryType.join(", ") : inquiryType;


        // Check if all fields are present
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mattdaymusic10@gmail.com',
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // First email: Notification to the admin
        const adminMailOptions = {
            from: email, // From the sender's email
            to: 'mattdaymusic10@gmail.com', // Your email address
            subject: 'New Contact Form Submission',
            text: `You have a new message from ${name} (${email}):\n\n ${inquiryType}\n\n${message}`,
        };

        // Second email: Confirmation to the user
        const userMailOptions = {
            from: 'mattdaymusic10@gmail.com', // Your email address
            to: email, // To the user who submitted the form
            subject: 'Confirmation of Your Message',
            text: `Dear ${name},\n\nThank you for reaching out! We have received your message:\n\n${inquiryType}\n\n${message}\n\nBest regards,\nTriangle Asphalt`,
        };

        // Send the email to the admin
        try {
            await transporter.sendMail(adminMailOptions);
            await transporter.sendMail(userMailOptions);
            return res.status(200).json({ message: 'Emails sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Error sending email.', error: error.toString() });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed.' });
    }
}
