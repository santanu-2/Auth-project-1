// import { MailtrapClient } from "mailtrap";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// const TOKEN = process.env.MAILTRAP_TOKEN;
// const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

// export const mailtrapClient = new MailtrapClient({
//   endpoint: ENDPOINT,
//   token: TOKEN,
// });

// export const sender = {
//   email: "mailtrap@demomailtrap.com",
//   name: "Mailtrap Test",
// };
// var transport = nodemailer.createTransport({
//   host: "live.smtp.mailtrap.io",
//   port: 587,
//   auth: {
//     user: "api",
//     pass: "a005ffe31e987a995216b5e3cd07ab24",
//   },
// });
export const SendMail = async (payload) => {
  console.log("PAYLOAD->", payload);

  console.log(process.env.MY_GMAIL, process.env.MY_PASSWORD);
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      secure: true,
      auth: {
        user: process.env.MY_GMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });
    const receiver = {
      from: "santanuchow2@gmail.com",
      to: `${payload.recipient}`,
      subject: `${payload.SUBJECT}`,
      html: payload.MyHtml,
      category: `${payload.CATEGORY}`,
    };
    const maildata = await transporter.sendMail(receiver);
    console.log(maildata);
  } catch (error) {
    console.log("Error", error);
  }
};
