const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = await nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

// const nodeMailer = require("nodemailer");

// const sendEmail = async (options) => {
//   try {
//     const transporter = nodeMailer.createTransport({
//       service: process.env.SMPT_SERVICE,
//       auth: {
//         user: process.env.SMPT_MAIL,
//         pass: process.env.SMPT_PASSWORD,
//       },
//       // Add any additional options such as secure: true if required
//     });

//     const mailOptions = {
//       from: process.env.SMPT_MAIL,
//       to: options.email,
//       subject: options.subject,
//       text: options.message,
//     };

//     await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw new Error("Failed to send email");
//   }
// };

// module.exports = sendEmail;
