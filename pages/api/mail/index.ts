import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import smtpConfig from "@/config/smtpConfig";
import upload from "../middleware/uploadMiddleware";
import fs from "fs";

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === "POST") {
    upload.array('image', 10)(req, res, async (error: any) => {
      if (error) {
        console.error("Error uploading files:", error);
        res.status(500).json({ error: "Failed to upload files" });
        return;
      }

      const { nom, adresse, ville, codepostal, telephone, email, sujet }: ContactFormData = req.body;
      const images = req.files as Express.Multer.File[];

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

        console.log('image :',images)
        console.log('content :',content)
      // Configuration du transporteur Nodemailer
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_SECURE,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      // Options de l'e-mail
      const mailOptions = {
        from: smtpConfig.auth.user,
        to: smtpConfig.auth.user,
        subject: sujet,
        text: content,
        attachments: images?.map((image) => ({
          filename: image.originalname,
          content: image.buffer,
        })),
      };

      try {
        // Envoi de l'e-mail
        await transporter.sendMail(mailOptions);

        // Suppression des fichiers après l'envoi du mail
        if (images) {
          images.forEach((image) => {
            fs.unlink(image.path, (err) => {
              if (err) {
                console.error("Failed to delete file:", err);
              } else {
                console.log("File deleted successfully");
              }
            });
          });
        }

        res.status(200).json({ message: "E-mail sent successfully" });
      } catch (error) {
        console.error("Error sending e-mail:", error);
        res.status(500).json({ error: "Failed to send e-mail" });
      }
    });
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
