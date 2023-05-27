import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from 'fs';
import nodemailer from "nodemailer";
import path from "path";

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        const form = new formidable.IncomingForm(
            {
                uploadDir: path.join(process.cwd(), 'upload/files'),
                keepExtensions: true,
            });
        form.parse(req, async (err, fields, files) => {
            if (err) {
                res.status(500).json({ error: "Failed to parse form" });
                return;
            }
            console.log("Files:", files);  // Add this line

            const { nom, adresse, ville, codepostal, telephone, email, sujet } = fields;
            const firstCodePostal = Array.isArray(codepostal) ? codepostal[0] : codepostal;
            const firstTelephone = Array.isArray(telephone) ? telephone[0] : telephone;
            const firstEmail = Array.isArray(email) ? email[0] : email;

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
                from: SMTP_USER,
                to: SMTP_USER,
                subject: sujet,
                text: content,
                attachments: Object.values(files).map((file : any) => {
                    console.log("File name:", file.originalFilename);  // And this line
                    return {
                        filename: file.originalFilename,
                        content: fs.readFileSync(file.filepath),
                    };
                }),
            };

            try {
                await transporter.sendMail(mailOptions as any);

                Object.values(files).forEach((file : any) => {
                    fs.unlink(file.filepath, function(err) {  // Change this line
                        if (err) throw err;
                        console.log(`File ${file.filepath} deleted`);  // And this line
                    });
                });

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
