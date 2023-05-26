import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import smtpConfig from "@/config/smtpConfig";

interface ContactFormData {
  nom: string,
    adresse: string,
    ville: string,
    codepostal: string,
    telephone: string,
    email: string,
    sujet: string
}

interface ApiResponse {
  message?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === "POST") {
    const { nom, adresse, ville, codepostal, telephone, email, sujet }: ContactFormData = req.body;

    const content = " Nom : " + nom + "\n Adresse : " + adresse + "\n Ville : " + ville + "\n Code postal : " + codepostal + "\n Téléphone : " + telephone + "\n Email : " + email + "\n Sujet : " + sujet + "\n"

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      // Configurez ici votre serveur SMTP ou utilisez un service d'e-mails tiers
      host: "smtp.example.com",
      port: 587,
      secure: false,
      auth: {
        user: "your-email@example.com",
        pass: "your-email-password"
      }
    });

    // Options de l'e-mail
    const mailOptions = {
        from: smtpConfig.auth.user,
        to: smtpConfig.auth.user,
        subject: sujet,
        text: content
    };

    try {
      // Envoi de l'e-mail
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "E-mail sent successfully" });
    } catch (error) {
      console.error("Error sending e-mail:", error);
      res.status(500).json({ error: "Failed to send e-mail" });
    }
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
