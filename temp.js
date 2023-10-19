const nodemailer = require('nodemailer');
require('dotenv').config()

// Define the email content template
const template = `
<html>
<body>
<p>Hey {name},</p>

<p>My name is Utkarsh Agarwal, and I am a final-year MCA student at NIT Karnataka. I recently completed a summer internship at Amazon, gaining valuable experience in software development.</p>

<p>I am writing to express my interest in joining {company} as a Software Development Engineer. I am open to both a 6-month spring internship and a full-time role.<p>

<p>I've also attached my <a href="https://drive.google.com/file/d/1z1eU2XE3ijK9peMpKry5gOOA28i0mpAM/view?usp=sharing">Resume</a> for your reference. Looking forward to hearing from you! Thank you.</p>

<p>Regards,<br>
Utkarsh Agarwal<br>
Phone: +91 9997576063<br>
<a href="https://www.linkedin.com/in/utkarsh-agarwal-1b6943205/">LinkedIn</a>
</p>
</body>
</html>
`;

// List of recipients with their variables
const recipients = [
  // Add more recipients with their respective variables
];

// Your email credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

// Send emails
recipients.forEach((recipient) => {
  const mailOptions = {
    from: 'utkarshagarwal7576@gmail.com',
    to: recipient.email,
    subject: 'Software Engineer Candidate: Utkarsh Agarwal',
    html: template.replace(/{(\w+)}/g, (match, p1) => recipient[p1]),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });
});
console.log(process.env.USER)
