// import express from 'express';
// import cors from 'cors';
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();

// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// app.post('/send', async (req, res) => {
//   const { name, phone, city, question } = req.body;

//   if (!name || !phone) {
//     return res.status(400).json({ error: 'Name and phone are required' });
//   }

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: `"<Miller-site>" <${process.env.EMAIL_USER}>`,
//     to: process.env.TO_EMAIL,
//     subject: 'Новая заявка с Miller-site',
//     html: `
//       <h2>Новая заявка:</h2>
//       <p><strong>Имя:</strong> ${name}</p>
//       <p><strong>Телефон:</strong> ${phone}</p>
//       ${city ? `<p><strong>Город:</strong> ${city}</p>` : ''}
//       ${question ? `<p><strong>Вопрос:</strong> ${question}</p>` : ''}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: 'Email sent successfully' });
//   } catch (err) {
//     console.error('Email error:', err);
//     res.status(500).json({ success: false, message: 'Failed to send email' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// чтобы корректно работать с __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// 📩 API для отправки формы
app.post("/send", async (req, res) => {
  const { name, phone, city, question } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"<Miller-site>" <${process.env.EMAIL_USER}>`,
    to: process.env.TO_EMAIL,
    subject: `Новая заявка с Miller-site от ${name}`,
    html: `
      <h2>Новая заявка:</h2>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      ${city ? `<p><strong>Город:</strong> ${city}</p>` : ""}
      ${question ? `<p><strong>Вопрос:</strong> ${question}</p>` : ""}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// 📦 Раздаём статические файлы из Vite (dist)
app.use(express.static(path.join(__dirname, "dist")));

// ⚡ Для всех остальных роутов — index.html (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// 🚀 Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
