import { FC } from "react";
import { useInView } from "react-intersection-observer";

const EtapesComponent: FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
    
  return (
    <section id="etapes">
        <div className="container">
			<h2 ref={ref} className={inView ? "title animate__animated animate__fadeInUp" : "title"}>Comment ça marche ?</h2>
			<p ref={ref} className={inView ? "subtitle animate__animated animate__fadeInUp" : "subtitle"}>Simple comme bonjour !</p>

            <div className="flex-container">
                <div className="card">
                    <span>1</span>
                    <h3>Devis gratuit</h3>
                    <p>Contactez-nous au 07 69 47 46 32 pour nous faire part de votre problématique.</p>
                </div>
                <div className="card">
                    <span>2</span>
                    <h3>Intervention</h3>
                    <p>Un de nos serruriers se déplace rapidement pour vous garantir une prestation de qualité.</p>
                </div>
                <div className="card">
                    <span>3</span>
                    <h3>Satisfaction</h3>
                    <p>Notre SAV fait le point avec vous afin de recueillir votre avis sur la prestation garantie.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default EtapesComponent;
