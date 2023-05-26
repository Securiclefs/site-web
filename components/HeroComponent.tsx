import { FC, useState, useEffect } from "react";
import Image from "next/image";
import {
  instagram,
  tiktok,
  facebook,
  whatsapp,
  france,
  position,
  assurances,
} from "@/assets/icons";
import PhoneButton from "@/components/shared/phoneButtonComponent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const HeroComponent: FC = () => {
  const [isSliderActive, setIsSliderActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSliderActive(true);
      } else {
        setIsSliderActive(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="mt-32" id="header-home">
      <div className="top">
        <p>🚨 Une urgence ? Appelez au 07 69 47 46 32 !</p>
      </div>
      <div className="container">
        <div className="content">
          <p>24/24 7j/7j</p>
          <h1>Serrurier à Paris et en Ile de France </h1>
          <h2>Fiabilité et rapidité !</h2>
          <div>
            <Image src={assurances} height={15} width={15} alt="" />
            <span>Agréé assurances</span>
          </div>
          {/* <div>
                        <Image src={position} height={15} width={15} alt=""/>
                        <span>15 adresse de la boutique</span>
                    </div> */}
          <div>
            <PhoneButton />
          </div>
        </div>
      </div>
      <div className="bottom">
        {isSliderActive && (
          <Splide
            aria-label="Serrurier assurance"
            options={{
              type: "loop",
              perMove: 1,
              pagination: false,
              autoWidth: true,
              arrows: false,
              autoplay: true,
              speed: 500,
              gap: "1rem",
            }}
          >
            <SplideSlide>
              <p className="flex">
                <Image src={france} alt="" /> &nbsp; Entreprise française
              </p>
            </SplideSlide>
            <SplideSlide>
              <p>⚡️ 24h/24</p>
            </SplideSlide>
            <SplideSlide>
              <p>🎓 Artisans diplômés</p>
            </SplideSlide>
            <SplideSlide>
              <p>💎 + 2 ans d’experience</p>
            </SplideSlide>
            <SplideSlide>
              <p>🔐 + 500 interventions</p>
            </SplideSlide>
            <SplideSlide>
              <p>😷 Gestes barrières</p>
            </SplideSlide>
          </Splide>
        )}
        {!isSliderActive && (
          <>
            <div>
              <p className="flex mr-3">
                <Image src={france} alt="" /> &nbsp; Entreprise française
              </p>
            </div>
            <div>
              <p className="flex mr-3">⚡️ 24h/24</p>
            </div>
            <div>
              <p className="flex mr-3">🎓 Artisans diplômés</p>
            </div>
            <div>
              <p className="flex mr-3">🔐 + 500 interventions</p>
            </div>
            <div>
              <p className="flex">😷 Gestes barrières</p>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default HeroComponent;
