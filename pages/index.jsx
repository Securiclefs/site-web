import {
  HeroComponent,
  ServicesComponent,
  EtapesComponent,
  TarifsComponent,
  RealisationsComponent,
  FaqComponent,
  AssurancesComponent,
  UrgenceComponent,
  ContactComponent,
} from "@/components";
import SeoComponent from "@/components/shared/seo-component";

export default function Home() {
  return (
    <>
      <SeoComponent
        seo={{
          title: "Accueil - Securiclefs ",
          description: "Securiclefs est une entreprise de serrurerie professionnelle offrant des services de qualité. Nous sommes spécialisés dans l'installation, la réparation et le remplacement de tous les types de serrures, de portes, de fenêtres et de systèmes de sécurité.",
        }}
      />
      <HeroComponent />
      <main>
        <ServicesComponent />
        <EtapesComponent />
        <TarifsComponent />
        {/* <RealisationsComponent /> */}
        <FaqComponent />
        <AssurancesComponent />
        <UrgenceComponent />
        <ContactComponent />
      </main>
    </>
  );
}
