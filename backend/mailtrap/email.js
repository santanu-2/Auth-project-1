import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_TEMPLATE,
} from "./emailTemplate.js";

import nodemailer from "nodemailer";
import { SendMail } from "./mailtrap.js";
export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = email;
  const MyHtml = VERIFICATION_EMAIL_TEMPLATE.replace(
    "{verificationCode}",
    verificationToken
  );
  const SUBJECT = "Verify your email";
  const CATEGORY = "Email Verification";
  try {
    const response = await SendMail({
      recipient,
      SUBJECT,
      MyHtml,
      CATEGORY,
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error send verification email:${error}`);
    throw new Error(`Error sending verification email:${error}`);
  }
};
export const sendWelcomeEmail = async (email, name) => {
  const recipient = email;
  const MyHtml = WELCOME_TEMPLATE.replace("{user}", name);
  const SUBJECT = "Welcome in our company";
  const CATEGORY = "Welcome a new user";

  try {
    const response = await SendMail({
      recipient,
      SUBJECT,
      MyHtml,
      CATEGORY,
    });

    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error(`Error sending welcome email`, error);

    throw new Error(`Error sending welcome email: ${error}`);
  }
};
export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = email;
  const SUBJECT = "Reset your password";
  const CATEGORY = "Password Reset";
  const MyHtml = PASSWORD_RESET_REQUEST_TEMPLATE.replace(
    "{resetURL}",
    resetURL
  );
  try {
    const response = await SendMail({
      recipient,
      SUBJECT,
      MyHtml,
      CATEGORY,
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error send reset password email:${error}`);
    throw new Error(`Error sending reset password email:${error}`);
  }
};

export const sendResetSuccessmail = async (email) => {
  const recipient = email;
  console.log(recipient);
  const SUBJECT = "Password reset successfull";
  const CATEGORY = "Password Reset";
  const MyHtml = PASSWORD_RESET_SUCCESS_TEMPLATE;
  try {
    const response = await SendMail({
      recipient,
      SUBJECT,
      MyHtml,
      CATEGORY,
    });
    console.log("Password reset email sent successfully", response);
  } catch (error) {
    console.log(`Error sending password reset success email:${error}`);
    throw new Error(`Error sending password reset success email:${error}`);
  }
};
