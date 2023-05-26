import { NavLinkEnum } from "@/components/nav";
import SeoComponent from "@/components/shared/seo-component";
import { useNavSettingsContext } from "@/context/nav-settings-context";
import { useEffect } from "react";

export default function Realisations() {
  const { setActiveNavLink } = useNavSettingsContext();
  useEffect(() => {
    setActiveNavLink(NavLinkEnum.Realisations);
  }, [setActiveNavLink]);
  return (
    <>
      <SeoComponent
        seo={{
          title: "Réalisations du serrurier Certiclefs ",
          description: "Description SEO de la page",
        }}
        // plus tard tu pense a ajouter une image au seo cmsa elle apparait dns les recherches google
      />
      <header className="mt-24">Introduction page / hero</header>
      <main>Realisations, design a definir</main>
    </>
  );
}
