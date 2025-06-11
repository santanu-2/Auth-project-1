
# 🔐 MERN Auth Project

A simple and secure authentication system built with the MERN stack. It includes email verification, JWT-based login, and password reset functionality. The frontend uses **Zustand** for global state management, and **Nodemailer (OAuth2)** is used to send emails.

## 🔗 Live Demo

🌍 [View Live App](https://auth-project-1-3zgz.onrender.com) 


## 🛠️ Stack

- **MongoDB** – Database
- **Express.js** – Backend framework
- **React.js** – Frontend framework
- **Node.js** – Runtime
- **Zustand** – React global state management
- **JWT** – Authentication
- **TAILWIND CSS** -For Styling Purpose
- **Nodemailer + OAuth** – Sending verification and reset emails

## ✨ Features

- ✅ User signup with email verification
- 🔐 Secure login/logout with JWT
- 📧 Email verification & welcome emails
- 🔁 Forgot and reset password flow(OTP & Reset Pasword Link)
- 🔒 Protected routes (frontend & backend)
- ⚙️ Zustand store for centralized state

## 🚀 Getting Started

1. **Clone the repo:**

```bash
git clone https://github.com/santanu-2/Auth-project-1.git
````

2. **Setup backend:**

```bash
cd backend
npm install
# create a .env file with your MongoDB, JWT, and Gmail OAuth credentials
npm run dev
```

3. **Setup frontend:**

```bash
cd ../frontend
npm install
# create a .env file with REACT_APP_API_URL
npm start
```

## 🙋 Author

* GitHub: [@santanu-2](https://github.com/santanu-2)


