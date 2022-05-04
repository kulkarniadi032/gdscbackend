var nodemailer = require("nodemailer");
// const res = require("express/lib/response");
// const req = require("express/lib/request");
// const sendEmail = (
//   to = "kulkarniadi032@gmail.com",
//   subject = `Message from GDSC DIEMS regarding your query`,
//   text = "This is Coming From Node Application"
// ) =>
function sendEmail(
  to = "kulkarniadi032@gmail.com",
  text = "This is Coming From Node Application",
  html = "<h1>hellooo</h1>",
  subject = `Message from GDSC DIEMS regarding your query`
) {
  // console.log(email, userName);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "adikui0240@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
  });
  const option = {
    from: "adikui0240@gmail.com",
    to: to,
    subject: subject,
    text: `hello ` + text,
    html: html,
  };

  transporter.sendMail(option, (error, info) => {
    error
      ? console.log("aaaa" + error)
      : console.log("Email Send Successfully");
  });
}

module.exports = sendEmail;
