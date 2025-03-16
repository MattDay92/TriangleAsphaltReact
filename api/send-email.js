const nodemailer = require('nodemailer');
require('dotenv').config();

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://triangleasphalt.com');
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
            host: 'secure.emailsrvr.com',
            port: 465, // Use 587 if not using SSL
            secure: true, // Set to false if using port 587 (TLS)
            auth: {
                user: process.env.EMAIL_USER, // Your Rackspace email
                pass: process.env.EMAIL_PASSWORD, // Your Rackspace email password
            },
        });

        // First email: Notification to the admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER, // ✅ Use your Rackspace email here
            replyTo: email, // Allows replies to go to the sender
            to: process.env.EMAIL_USER, // Your email address
            subject: 'New Contact Form Submission',
            text: `You have a new message from ${name} (${email}):\n\nInquiry Type: ${inquiryType}\n\n${message}`,
        };

        // Second email: Confirmation to the user
        const userMailOptions = {
            from: process.env.EMAIL_USER, // Your email address
            to: email, // To the user who submitted the form
            subject: 'Confirmation of Your Message',
            text: `Dear ${name},\n\nThank you for reaching out! We have received your message:\n\nInquiry Type:  ${inquiryType}\n\n${message}\n\nBest regards,\nTriangle Asphalt`,
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
