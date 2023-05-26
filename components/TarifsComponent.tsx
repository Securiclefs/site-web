import { FC } from "react";
import Image from "next/image"
import PhoneButton  from "@/components/shared/phoneButtonComponent";
import { check }  from "@/assets/icons";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const TarifsComponent: FC = () => {
  return (
    <section id="tarifs">
        <div className="container">
           <h2 className="title">Nos tarifs</h2>
           <p className="subtitle">Combien coûte  un serrurier ?</p>

           <div className="flex-container">
                <div className="card">
                   <div>
                        <h2>Porte claquée</h2>
                        <span>Dès <strong>140 €</strong> TTC</span>
                        <ul>
                            <li><Image src={check} alt="pose de serrure" /><span className="green">Devis gratuit</span></li>
                            <li><Image src={check} alt="serrure bloquée" />Déplacement</li>
                            <li><Image src={check} alt="ouverture de porte" />Ouverture de porte</li>
                            <li><Image src={check} alt="fermée à clé" />Devis et facture</li>
                        </ul>
                   </div>
                    <PhoneButton/>
                </div>
                <div className="card">
                    <div>
                        <h2>Porte fermée</h2>
                        <span>Dès <strong>160 €</strong> TTC</span>
                        <ul>
                            <li><Image src={check} alt="urgence serrurerie" /><span className="green">Devis gratuit</span></li>
                            <li><Image src={check} alt="ouvrir une serrure" />Déplacement</li>
                            <li><Image src={check} alt="déblocage de porte" />Ouverture de porte</li>
                            <li><Image src={check} alt="serrurier dépannage" />Nettoyage</li>
                            <li><Image src={check} alt="assurance habitation" />Devis et facture</li>
                        </ul>
                    </div>
                    <PhoneButton/>
                </div>
                <div className="card">
                    <div>
                        <h2>Porte blindée fermée</h2>
                        <span>Dès <strong>160 €</strong> TTC</span>
                        <ul>
                            <li><Image src={check} alt="demande de devis" /><span className="green">Devis gratuit</span></li>
                            <li><Image src={check} alt="changement de serrures" />Déplacement</li>
                            <li><Image src={check} alt="portes de garage" />Ouverture de porte</li>
                            <li><Image src={check} alt="dépanneurs" />Nettoyage</li>
                            <li><Image src={check} alt="serrurier weekend" />Devis et facture</li>
                        </ul>
                    </div>
                    <PhoneButton/>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TarifsComponent;
