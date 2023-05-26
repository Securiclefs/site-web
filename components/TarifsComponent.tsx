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
           <p className="subtitle">Combien coute un serrurier ?</p>

           <div className="flex-container">
                <div className="card">
                   <div>
                        <h2>Porte claquée</h2>
                        <span>Dès <strong>140 €</strong> TTC</span>
                        <ul>
                            <li><Image src={check} alt="" /><span className="green">Devis gratuit</span></li>
                            <li><Image src={check} alt="" />Déplacement</li>
                            <li><Image src={check} alt="" />Ouverture de porte</li>
                            <li><Image src={check} alt="" />Devis et facture</li>
                        </ul>
                   </div>
                    <PhoneButton/>
                </div>
                <div className="card">
                    <div>
                        <h2>Porte fermée</h2>
                        <span>Dès <strong>160 €</strong> TTC</span>
                        <ul>
                            <li><Image src={check} alt="" /><span className="green">Devis gratuit</span></li>
                            <li><Image src={check} alt="" />Déplacement</li>
                            <li><Image src={check} alt="" />Ouverture de porte</li>
                            <li><Image src={check} alt="" />Nettoyage</li>
                            <li><Image src={check} alt="" />Devis et facture</li>
                        </ul>
                    </div>
                    <PhoneButton/>
                </div>
                <div className="card">
                    <div>
                        <h2>Porte blindée fermée</h2>
                        <span>Dès <strong>160 €</strong> TTC</span>
                        <ul>
                            <li><Image src={check} alt="" /><span className="green">Devis gratuit</span></li>
                            <li><Image src={check} alt="" />Déplacement</li>
                            <li><Image src={check} alt="" />Ouverture de porte</li>
                            <li><Image src={check} alt="" />Nettoyage</li>
                            <li><Image src={check} alt="" />Devis et facture</li>
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
