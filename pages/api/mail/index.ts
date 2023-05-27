import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;

interface ContactFormData {
  nom: string;
  adresse: string;
  ville: string;
  codepostal: string;
  telephone: string;
  email: string;
  sujet: string;
}

interface ApiResponse {
  message?: string;
  error?: string;
}

const upload = multer().fields([
  { name: 'nom', maxCount: 1 },
  { name: 'adresse', maxCount: 1 },
  { name: 'ville', maxCount: 1 },
  { name: 'codepostal', maxCount: 1 },
  { name: 'telephone', maxCount: 1 },
  { name: 'email', maxCount: 1 },
  { name: 'sujet', maxCount: 1 },
  { name: 'politique', maxCount: 1 },
]);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      console.log(req.body);
      const { nom, adresse, ville, codepostal, telephone, email, sujet } = req.body;

      // Vérification des données
      if (!nom || !adresse || !ville || !codepostal || !telephone || !email || !sujet) {
        return res.status(400).json({ message: "Veuillez remplir tous les champs du formulaire." });
      }

      // Vérification du format de l'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Veuillez fournir une adresse email valide." });
      }

      const content =
        " Nom : " +
        nom +
        "\n Adresse : " +
        adresse +
        "\n Ville : " +
        ville +
        "\n Code postal : " +
        codepostal +
        "\n Téléphone : " +
        telephone +
        "\n Email : " +
        email +
        "\n Sujet : " +
        sujet +
        "\n";

      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT as string),
        secure: SMTP_SECURE === 'true',
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      const mailOptions = {
        from: "contact@securiclefs.fr",
        to: SMTP_USER,
        subject: "Contact - Securiclefs",
        text: content,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Message envoyé." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Une erreur c'est ptoduite." });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
