const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', 
        pass: 'your-app-password', 
    },
});

const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient@example.com', 
    subject: 'Hello from Node.js',
    text: 'This is a test email sent from Node.js!',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
