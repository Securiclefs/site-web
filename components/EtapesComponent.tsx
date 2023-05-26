import { FC } from "react";

const EtapesComponent: FC = () => {
  return (
    <section id="etapes">
        <div className="container">
			<h2 className="title">Comment ça marche ?</h2>
			<p className="subtitle">Simple comme bonjour !</p>

            <div className="flex-container">
                <div className="card">
                    <span>1</span>
                    <h3>Devis gratuit</h3>
                    <p>Contactez-nous au 01 88 61 02 62 pour nous faire part de votre problématique.</p>
                </div>
                <div className="card">
                    <span>2</span>
                    <h3>Intervention</h3>
                    <p>Un de nos serruriers se déplace rapdiement pour vous garantir une prestation de qualité.</p>
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
