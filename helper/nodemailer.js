const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "padilapadli57@gmail.com",
        pass: "nvuzyodzsveyuwbb",
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendVerification(email) {
    try {
        const info = await transporter.sendMail({
            from: "noreply", // sender address
            to: email, // list of receivers
            subject: "your code", // Subject line
            text: "Verifikasi kode : 9876", // plain text body
            html: "<p>Verifikasi kode : <b>9876</b></p>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    } catch (error) {
        console.log(error);
    }
    // send mail with defined transport object
}

// sendVerification().catch(console.error);

module.exports = sendVerification;
