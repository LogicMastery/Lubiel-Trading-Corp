import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: "smtp.resend.com",
  port: 465,
  secure: true,
  auth: {
    user: "resend",
    pass: "re_2MXp5V7S_kes55REoWUFysR13gq3Nb2hU",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function SendMail() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <delivered@resend.dev>', // sender address
    to: "silicon.logic.tech@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

SendMail().catch(console.error);
