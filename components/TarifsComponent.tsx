import { FC } from "react";
import Image from "next/image"
import PhoneButton  from "@/components/shared/phoneButtonComponent";
import { check }  from "@/assets/icons";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { useInView } from "react-intersection-observer";

const TarifsComponent: FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
    
      return (
        <section id="tarifs">
          <div className="container">
            <h2 ref={ref} className={inView ? "title animate__animated animate__fadeInLeft" : "title"}>Nos tarifs</h2>
            <p ref={ref} className={inView ? "subtitle animate__animated animate__fadeInLeft" : "subtitle"}>Combien coûte un serrurier ?</p>
    
            <div className="flex-container">
                
                <div className="card">
                   <div>
                        <h2>Porte claquée</h2>
                        <span>Dès <strong>140 €</strong> TTC</span>
                        <ul>
                            <li><Image src={check} alt="pose de serrure" /><strong className="green">Devis gratuit</strong></li>
                            <li><Image src={check} alt="serrure bloquée" /><strong>Déplacement</strong></li>
                            <li><Image src={check} alt="ouverture de porte" /><strong>Ouverture de porte</strong></li>
                            <li><Image src={check} alt="fermée à clé" /><strong>Devis et facture</strong></li>
                        </ul>
                   </div>
                    <PhoneButton/>
                </div>
                <div className="card">
                    <div>
                        <h2>Porte fermée</h2>
                        <span>Dès <strong>160 €</strong> TTC</span>
                        <ul>
                            <li><Image src={check} alt="urgence serrurerie" /><strong className="green">Devis gratuit</strong></li>
                            <li><Image src={check} alt="ouvrir une serrure" /><strong>Déplacement</strong></li>
                            <li><Image src={check} alt="déblocage de porte" /><strong>Ouverture de porte</strong> </li>
                            <li><Image src={check} alt="serrurier dépannage" /><strong>Nettoyage</strong></li>
                            <li><Image src={check} alt="assurance habitation" /><strong>Devis et facture</strong></li>
                        </ul>
                    </div>
                    <PhoneButton/>
                </div>
                <div className="card">
                    <div>
                        <h2>Porte blindée fermée</h2>
                        <span>Dès <strong>160 €</strong> TTC</span>
                        <ul>
                            <li><Image src={check} alt="demande de devis" /><strong className="green">Devis gratuit</strong></li>
                            <li><Image src={check} alt="changement de serrures" /><strong>Déplacement</strong></li>
                            <li><Image src={check} alt="portes de garage" /><strong>Ouverture de porte</strong></li>
                            <li><Image src={check} alt="dépanneurs" /><strong>Nettoyage</strong></li>
                            <li><Image src={check} alt="serrurier weekend" /><strong>Devis et facture</strong></li>
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
