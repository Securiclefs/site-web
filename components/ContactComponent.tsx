import { FC, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { upload, phone, email } from "@/assets/icons";
import axios from "axios";

const ContactComponent: FC = () => {
    const [formData, setFormData] = useState({
        nom: "",
        adresse: "",
        ville: "",
        codepostal: "",
        telephone: "",
        email: "",
        sujet: ""
      });
    
      const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        try {
          const response = await axios.post("/api/contact", formData);
          console.log(response.data); // Vous pouvez gérer la réponse ici, par exemple afficher un message de succès
          // Réinitialiser le formulaire
          setFormData({
            nom: "",
            adresse: "",
            ville: "",
            codepostal: "",
            telephone: "",
            email: "",
            sujet: ""
          });
        } catch (error) {
          console.error(error); // Gérer les erreurs de requête
        }
      };

    return (
        <section id="contact">
            <div className="container">
                <div className="card">
                    <div className="grid-container">
                        <div className="form-container">
                            <h2>Contactez-<span className="blue">nous</span></h2>
                            <p>Utilisez ce formulaire pour nous envoyer des infos / photos.</p>

                            <form method="post" onSubmit={handleSubmit}>
                                <div>
                                    <input type="text" placeholder="Nom complet*" id="nom" name="nom" value={formData.nom} onChange={handleChange} />
                                </div>
                                <div>
                                    <input type="text" placeholder="Adresse*"  id="adresse" name="adresse" value={formData.adresse} onChange={handleChange}/>
                                </div>
                                <div className="two-column">
                                    <input type="text" placeholder="Ville*"  id="ville" name="ville" value={formData.ville} onChange={handleChange}/>
                                    <input type="number" placeholder="Code postal*"  id="codepostal" name="codepostal" value={formData.codepostal} onChange={handleChange}/>
                                </div>
                                <div>
                                    <input type="tel" placeholder="Numéro de téléphone*"  id="telephone" name="telephone" value={formData.telephone} onChange={handleChange}/>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email*"  id="email" name="email" value={formData.email} onChange={handleChange}/>
                                </div>
                                <div>
                                    <textarea placeholder="Problème rencontré / sujet*" id="sujet" name="sujet" onChange={handleChange}>{formData.sujet}</textarea>
                                </div>
                                <div className="drop">
                                    <input type="file" />
                                    <div className="zone">
                                        <Image src={upload} alt="" />
                                        <p>Ajouter images / documents</p>
                                    </div>
                                    
                                </div>
                                <div className="info-file">
                                    <p>Le document ne doit pas dépasser 10mb</p>
                                </div>
                                <div className="politique">
                                    <input type="checkbox" name="politique" id="politique" />
                                    <label htmlFor="politique">J’accepte les politiques de confidentialité</label>
                                </div>
                                <button type="submit" className="form-btn">Envoyer</button>
                            </form>
                            <div className="coords">
                                <div>
                                    <Image src={phone} alt=""/>
                                     
                                     <div>
                                        <h5>Téléphone</h5>
                                        <Link href="tel:0769474632">07 69 47 46 32</Link>
                                     </div>
                                </div>

                                <div>
                                    <Image src={email} alt=""/>
                                     
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
