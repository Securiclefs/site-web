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
import { NavLinkEnum } from "@/components/nav";
import SeoComponent from "@/components/shared/seo-component";
import { useNavSettingsContext } from "@/context/nav-settings-context";
import { useEffect } from "react";

export default function Home() {
  const { setActiveNavLink } = useNavSettingsContext();
  useEffect(() => {
    setActiveNavLink("/homt");
  }, [setActiveNavLink]);
  return (
    <>
      <SeoComponent
        seo={{
          title: "Accueil - Securiclefs ",
          description: "Description SEO de la page",
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
