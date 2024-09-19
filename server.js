// Resend information
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: "465",
    auth: {
        user: "resend",
        pass: "re_D4A82adt_2BLaLBqHQ5hz9UT6jwDgYZRE"
    },
});

    async function submit() {
        const info = await transporter.sendMail({
            from: '"Resend " <delivered@resend.dev>',
            to: "silicon.logic.tech@gmail.com",
            subject: "Test",
            text: "Did it work?"
        });
        console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@resend.email>

    }

    submit().catch(console.error);