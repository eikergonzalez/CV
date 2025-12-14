require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configura tu transporte SMTP (puedes usar Gmail, Outlook, etc.)
const transporter = nodemailer.createTransport({
  name: process.env.NAME,
  host: process.env.HOST,
  port: Number(process.env.PORT),
  secure: process.env.SECURE === 'true',
  ssl: process.env.SSL === 'true',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

app.get('/api/contact', (req, res) => {
  res.send('API de envío de correos está funcionando');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Web Contacto" <support@eikergonzalez.com>`,
      to: 'support@eikergonzalez.com',
      subject: 'Nuevo mensaje de contacto',
      text: message,
      html: `
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b><br/>${message}</p>
      `,
    });
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

app.listen(5001, () => console.log('Servidor escuchando en puerto 5001'));