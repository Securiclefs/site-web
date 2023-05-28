import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { v2 as cloudinary } from 'cloudinary';
import * as mime from 'mime-types';
import nodemailer from "nodemailer";

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, SMTP_MAIL } = process.env;

export const config = {
    api: {
        bodyParser: false,
    },
};
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        const form = new formidable.IncomingForm({keepExtensions: true});
        form.parse(req, async (err, fields, files) => {
            if (err) {
                res.status(500).json({ error: "Failed to parse form" });
                return;
            }
            const attachments = await Promise.all(
                Object.values(files).map(async (file: any) => {
                    // Gérer les images avec Cloudinary ou les autres types de fichiers avec le système de fichiers local
                    const mimeType = mime.lookup(file.filepath);
                    if (mimeType && mimeType.startsWith('image/')) {
                        const result = await cloudinary.uploader.upload(file.filepath);
                        return {
                            filename: file.originalFilename,
                            content: result.secure_url,
                            public_id: result.public_id,
                        };
                    }
                    // Pour les autres types de fichiers, simplement retourner le chemin d'accès local au fichier
                    else {
                        return {
                            filename: file.originalFilename,
                            content: file.filepath,
                        };
                    }
                })
            );
            console.log(attachments)
            const { nom, adresse, ville, codepostal, telephone, email, sujet } = fields;

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
                host: SMTP_HOST || '',
                port: Number(SMTP_PORT) || 587,
                secure: SMTP_SECURE === 'true',
                auth: {
                    user: SMTP_USER || '',
                    pass: SMTP_PASS || '',
                },
            });

            const mailOptions = {
                from: SMTP_MAIL,
                to: SMTP_MAIL,
                subject: sujet,
                text: content,
                attachments: attachments.map((attachment) => ({
                    filename: attachment.filename,
                    path: attachment.content,
                })),
            };

            try {
                await transporter.sendMail(mailOptions as any);
                // Supprimer les images de Cloudinary
                await Promise.all(
                    attachments
                        .filter((attachment: any) => attachment.public_id)
                        .map((attachment: any) =>
                            cloudinary.uploader.destroy(attachment.public_id)
                        )
                );
                res.status(200).json({ message: "Message envoyé." });
            } catch (error) {
                console.error("Error sending e-mail:", error);
                res.status(500).json({ message: "Une erreur c'est produite" });
            }
        });
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
