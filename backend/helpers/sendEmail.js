const nodemailer = require('nodemailer');
require('dotenv').config();

const transport = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});

async function sendEmail (email, subject, emailHtml) {

    const emailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject,
        html: emailHtml
    };

    try {
        await transport.sendMail(emailOptions);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = sendEmail;
