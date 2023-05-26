import SeoComponent, { Seo } from "@/components/shared/seo-component";
import { NextPage } from "next/types";

interface Props {
  seo: Seo;
}

const MentionsLegales: NextPage<Props> = () => {
  // export default function MentionsLegales() {
  return (
    <>
      <SeoComponent
        seo={{
          title: "Mentions - Securiclefs ",
          description:
            "Securiclefs est une entreprise de serrurerie professionnelle offrant des services de qualité. Nous sommes spécialisés dans l'installation, la réparation et le remplacement de tous les types de serrures, de portes, de fenêtres et de systèmes de sécurité.",
        }}
      />
      <section id="mentionslegales">
        <div className="container">
          <h2>Mentions Légales</h2>
          <p>
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
            pour la confiance en l'économie numérique, il est précisé aux
            utilisateurs du site SECURICLEFS l'identité des différents
            intervenants dans le cadre de sa réalisation et de son suivi.
          </p>

          <div>
            <h3>Editeur du site</h3>
            <p>
              Le présent site, accessible à l’URL www.securiclefs.fr (le « Site
              »), est édité par : Amal Cardot. Le numéro individuel TVA de
              l’éditeur est : FR57951333335.
            </p>
          </div>
          <div>
            <h3>Hébergement</h3>
            <p>
              Le Site est hébergé par la société 1&1 / IONOS, situé 7 Place de
              la Gare - 57200 Sarreguemines, (contact téléphonique ou email :
              (+33) 9 70 80 89 11).
            </p>
          </div>
          <div>
            <h3>Directeur de publication </h3>
            <p>Le Directeur de la publication du Site est Amal Cardot.</p>
          </div>
          <div>
            <h3>Nous contacter</h3>
            <p>Par téléphone : +33769474632</p>
            <p>Par email : contact@securiclefs.fr</p>
            <p>
              Par courrier : 38 rue de la Mare des Noues, 95130 Franconville
            </p>
          </div>
        </div>
      </section>
      <section id="politiques">
        <div className="container">
          <h2>Politiques de Confidentialité</h2>

          <div>
            <p>
              Le Site respecte les lois européennes sur la protection de la vie
              privée relative à l'information, aux fichers et aux libertés, vous
              disposez d'un droit d'accès, de modificaton, de rectification et
              de suppression de données qui vous concernent. Conformement à la
              loi "Informatique et Libertés" n°78-17 du 06 janvier 1978.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default MentionsLegales;
