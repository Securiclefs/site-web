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
} from "@/components/";
import { NavLinkEnum } from "@/components/nav";
import SeoComponent, { Seo } from "@/components/shared/seo-component";
import { useNavSettingsContext } from "@/context/nav-settings-context";
import Head from "next/head";
import { NextPage } from "next/types";
import { useEffect } from "react";

interface Props {
  seo: Seo;
}

const Home: NextPage<Props> = () => {
  // export default function Home() {
  const { setActiveNavLink } = useNavSettingsContext();
  useEffect(() => {
    setActiveNavLink(NavLinkEnum.Home);
  }, [setActiveNavLink]);
  return (
    <>
      <SeoComponent
        seo={{
          title: `Services de serrurerie 24h/24 à Paris et en Île-de-France |
          Securiclefs `,
          description:
            "Securiclefs propose des services de serrurerie professionnels et fiables, disponibles 24h/24 à Paris et en Île-de-France. Faites confiance à notre expertise pour assurer la sécurité de votre domicile ou de votre entreprise. #serrurerie #Paris #ÎledeFrance",
        }}
      />
      {/* <Head>
        <title>
          Services de serrurerie 24h/24 à Paris et en Île-de-France |
          Securiclefs
        </title>
        <meta
          name="description"
          content="Securiclefs propose des services de serrurerie professionnels et fiables, disponibles 24h/24 à Paris et en Île-de-France. Faites confiance à notre expertise pour assurer la sécurité de votre domicile ou de votre entreprise. #serrurerie #Paris #ÎledeFrance"
        />
        <meta
          property="og:title"
          content="Services de serrurerie 24h/24 à Paris et en Île-de-France | Securiclefs"
        />
        <meta
          property="og:description"
          content="Securiclefs offre des services de serrurerie sur Paris et en Île-de-France. Faites confiance à notre expertise pour tous vos besoins de sécurité. #serrurerie #Paris #ÎledeFrance"
        />
      </Head> */}

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
};

export default Home;
