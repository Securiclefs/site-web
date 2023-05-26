import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { faq, faqWave } from "@/assets/shared";

const FaqComponent: FC = () => {
  const [activeAccordion, setActiveAccordion] = useState("");

  const toggleAccordion = (accordionId: string) => {
    setActiveAccordion((prevAccordion) =>
      prevAccordion === accordionId ? "" : accordionId
    );
  };

  return (
    <section id="faq">
      <div className="container">
        <div className="card">
          <h2>F.A.Q</h2>
          <p>Réponses fournies par notre équipe</p>

          <div className="grid-container">
            <div>
              <Image src={faq} alt="Serrurier Paris" width="500" height="500" />
            </div>
            <div>
              <div className="faq-content accordion">
                <div className="accordion-item">
                  <div
                    className={`accordion-header close ${
                      activeAccordion === "faq-1" ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion("faq-1")}
                  >
                    <h4 className="text-securiclefs-blue-600">
                      Sur mon devis, il y a 4 heures de main d&apos;œuvre, mais
                      l&apos;intervention n&apos;a duré que 2 heures. Dois-je
                      quand même payer les 4 heures?
                    </h4>
                    <span></span>
                  </div>
                  <div
                    className={`accordion-body ${
                      activeAccordion === "faq-1" ? "active" : ""
                    }`}
                    id="faq-1"
                  >
                    <p>
                      Non, les heures en plus ne seront pas sur la facture et ne
                      vous seront pas facturées.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className={`accordion-header close ${
                      activeAccordion === "faq-2" ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion("faq-2")}
                  >
                    <h4 className="text-securiclefs-blue-600">
                      Une pièce a été posée, mais elle dysfonctionne. Comment ça
                      se passe?
                    </h4>
                    <span></span>
                  </div>
                  <div
                    className={`accordion-body ${
                      activeAccordion === "faq-2" ? "active" : ""
                    }`}
                    id="faq-2"
                  >
                    <p>
                      Chaque pièce est garantie plus de 2 ans. Si celle-ci
                      dysfonctionne, nous viendrons vous la changer
                      gratuitement.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className={`accordion-header close ${
                      activeAccordion === "faq-3" ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion("faq-3")}
                  >
                    <h4 className="text-securiclefs-blue-600">
                      L&apos;intervention a duré moins de 30 minutes. Serai-je
                      facturé(e) pour une heure?
                    </h4>
                    <span></span>
                  </div>
                  <div
                    className={`accordion-body ${
                      activeAccordion === "faq-3" ? "active" : ""
                    }`}
                    id="faq-3"
                  >
                    <p>
                      Non, si l&apos;intervention dure moins de 30 minutes, vous
                      serez facturé(e) pour 30 minutes. Si celle-ci dure plus de
                      30 minutes, vous serez facturé(e) à l&apos;heure.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className={`accordion-header close ${
                      activeAccordion === "faq-4" ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion("faq-4")}
                  >
                    <h4 className="text-securiclefs-blue-600">
                      Je souhaite changer ma porte, mais je ne connais pas les
                      mesures. Comment faire?
                    </h4>
                    <span></span>
                  </div>
                  <div
                    className={`accordion-body ${
                      activeAccordion === "faq-4" ? "active" : ""
                    }`}
                    id="faq-4"
                  >
                    <p>
                      Pour chaque intervention nécessitant une prise de mesures,
                      le serrurier se déplacera pour faire le nécessaire avant
                      de vous fournir un devis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqComponent;
