// Resend information
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "resend",
    pass: "re_D4A82adt_2BLaLBqHQ5hz9UT6jwDgYZRE",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'delivered@resend.dev', 
    to: "silicon.logic.tech@gmail.com", 
    subject: "test", 
    text: "Did it work?", 
    html: "<b>Test</b>",
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
