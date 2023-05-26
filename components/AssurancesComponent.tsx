import { FC, useEffect, useState } from "react";
import Image from "next/image";
import {
  allianz,
  axa,
  bnp,
  ce,
  gmf,
  groupama,
  maaf,
  maif,
  matmut,
  swisslife,
} from "@/assets/shared";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const AssurancesComponent: FC = () => {
  return (
    <section id="assurance">
      <div className="container">
        <h2 className="title">Nos assurances</h2>
        <p className="subtitle">
          La majorité des assureurs prennent en charge jusqu’à 100% de nos
          interventions.
        </p>

        <Splide
          aria-label="Serrurier assurance"
          options={{
            type: "loop",
            perPage: 5,
            pagination: false,
            speed: 500,
            gap: "1rem",
            breakpoints: {
              640: {
                perPage: 3,
              },
              992: {
                perPage: 4,
              },
            },
          }}
        >
          <SplideSlide>
            <Image src={swisslife} alt="image assurance SWISSLIFE" />
          </SplideSlide>
          <SplideSlide>
            <Image src={allianz} alt="image assurance ALLIANZ" />
          </SplideSlide>
          <SplideSlide>
            <Image src={axa} alt="image assurance AXA" />
          </SplideSlide>
          <SplideSlide>
            <Image src={bnp} alt="image assurance BNP" />
          </SplideSlide>
          <SplideSlide>
            <Image src={ce} alt="image assurance CE" />
          </SplideSlide>
          <SplideSlide>
            <Image src={gmf} alt="image assurance GMF" />
          </SplideSlide>
          <SplideSlide>
            <Image src={groupama} alt="image assurance GROUPAMA" />
          </SplideSlide>
          <SplideSlide>
            <Image src={maaf} alt="image assurance MAAF" />
          </SplideSlide>
          <SplideSlide>
            <Image src={maif} alt="image assurance MAIF" />
          </SplideSlide>
          <SplideSlide>
            <Image src={matmut} alt="image assurance MATMUT" />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default AssurancesComponent;
