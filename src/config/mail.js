const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "4a3dc84c0f0242", // generated ethereal user
      pass: "d1ea6a1a5b708f", // generated ethereal password
    },
  });

