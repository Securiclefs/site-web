import { FC, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { upload, phone, email } from "@/assets/icons";
import axios from "axios";

const ContactComponent: FC = () => {
    const [formData, setFormData] = useState<{ [key: string]: string | FileList | null }>({
        nom: "",
        adresse: "",
        ville: "",
        codepostal: "",
        telephone: "",
        email: "",
        sujet: "",
        file: null,
    });

    const [message, setMessage] = useState("")
    const [messageFile, setMessageFile] = useState("")
    const [totalFileSize, setTotalFileSize] = useState(0);


    const handleChange = (e: any) => {
        console.log(formData);
        
        
        if (e.target.name === "file") {
            setMessageFile("")

            if(e.target.files.length <= 10){
                const totalSize = getTotalFileSize(e.target.files);
                if (totalSize <= 10 * 1024 * 1024) {
                    setFormData({ ...formData, [e.target.name]: e.target.files });
                    setTotalFileSize(totalSize)
                   
                    
                } else{
                    setMessageFile("Le poid total est limité à 10 mb.")
                }
            } else {
                setMessageFile("Le nombre fichier est limité à 10.")
            }
           
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const getTotalFileSize = (files: FileList | null): number => {
        let totalSize = 0;
        if (files) {
            for (let i = 0; i < files.length; i++) {
                totalSize += files[i].size;
            }
        }
        return totalSize;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Initialize FormData
        const data = new FormData();
        for (let key in formData) {
            if (key === "file" && formData[key] instanceof FileList) {
                // @ts-ignore
                for (let i = 0; i < formData[key].length; i++) {
                    // @ts-ignore
                    if (formData[key][i]) {
                        // @ts-ignore
                        data.append(`file${i}`, formData[key][i]);  // Append with key file and index
                    }
                }
            } else {
                data.append(key, String(formData[key]));
            }
        }


        // @ts-ignore
        for (let [key, value] of data.entries()) {
            console.log(`${key}: ${value}`);
        }
        try {
            const response = await axios.post("/api/mail", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            console.log(response.data);
            setMessage(response.data.message)
           let nomValue =  document.querySelector("#nom") as HTMLInputElement 
           nomValue.value = ""
           let adresseValue =  document.querySelector("#adresse") as HTMLInputElement 
           adresseValue.value = ""
           let villeValue =  document.querySelector("#ville") as HTMLInputElement 
           villeValue.value = ""
           let codepostalValue =  document.querySelector("#codepostal") as HTMLInputElement 
           codepostalValue.value = ""
           let telephoneValue =  document.querySelector("#telephone") as HTMLInputElement 
           telephoneValue.value = ""
           let emailValue =  document.querySelector("#email") as HTMLInputElement 
           emailValue.value = ""
           let sujetValue =  document.querySelector("#sujet") as HTMLTextAreaElement 
           sujetValue.value = ""
           let fileValue =  document.querySelector("#file") as any
           fileValue.value = ""

            
            setTotalFileSize(0);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="card">
                    <div className="grid-container">
                        <div className="form-container">
                            <h2>Contactez-<span className="blue">nous</span></h2>
                            <p>Utilisez ce formulaire pour nous envoyer des informations/photos.</p>
                                {/*multi form data*/}
                            <form method="post" onSubmit={handleSubmit} encType="multipart/form-data">
                                <div>
                                    <input type="text" placeholder="Nom complet*" id="nom" name="nom"  onChange={handleChange} />
                                </div>
                                <div>
                                    <input type="text" placeholder="Adresse*"  id="adresse" name="adresse"  onChange={handleChange}/>
                                </div>
                                <div className="two-column">
                                    <input type="text" placeholder="Ville*"  id="ville" name="ville"  onChange={handleChange}/>
                                    <input type="text" placeholder="Code postal*"  id="codepostal" name="codepostal" onChange={handleChange}/>
                                </div>
                                <div>
                                    <input type="tel" placeholder="Numéro de téléphone*"  id="telephone" name="telephone"  onChange={handleChange}/>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email*"  id="email" name="email" onChange={handleChange}/>
                                </div>
                                <div>
                                    <textarea placeholder="Problème rencontré / sujet*" id="sujet" name="sujet" onChange={handleChange}></textarea>
                                </div>
                                <div className="drop">
                                    <input type="file" name="file" id="file" onChange={handleChange} multiple />
                                    <div className="zone">
                                        <Image src={upload} alt="serrurier" />
                                        <p>Ajouter images / documents</p>
                                    </div>
                                    
                                </div>
                                <div className="info-file">
                                {formData.file && typeof formData.file !== 'string' && Array.from(formData.file).map((file: File, index: number) => (
    <div key={index}>
      <p>{file.name}</p>
    </div>
  ))}
                                    <p>Le document ne doit pas dépasser 10mb</p>
                                    <p className="message-error">{messageFile}</p>
                                </div>
                                <div className="politique">
                                    <label htmlFor="politique">En soumettant ce formulaire, vous acceptez notre politique de confidentialité.</label>
                                </div>
                                <p className="message-success">{message}</p>
                                <button type="submit" className="form-btn">Envoyer</button>
                            </form>
                            <div className="coords">
                                <div>
                                    <Image src={phone} alt="serrure"/>
                                     
                                     <div>
                                        <h5>Téléphone</h5>
                                        <Link href="tel:0769474632">07 69 47 46 32</Link>
                                     </div>
                                </div>

                                <div>
                                    <Image src={email} alt="dépannage serrurerie"/>
                                     
                                     <div>
                                        <h5>E-mail</h5>
                                        <Link href="mailTo:contact@securiclefs.fr">contact@securiclefs.fr</Link>
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="map-container">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.1273332868554!2d2.2406906999999996!3d48.989134199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66707d9b08c91%3A0x1e6d2fd6a8bce7a3!2s38%20Rue%20de%20la%20Mare%20des%20Noues%2C%2095130%20Franconville!5e0!3m2!1sfr!2sfr!4v1684526480512!5m2!1sfr!2sfr" width="600" height="800" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactComponent;
