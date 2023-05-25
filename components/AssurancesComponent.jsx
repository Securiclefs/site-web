import { FC, useEffect, useState } from "react";
import Image from "next/image"
import { allianz, axa, bnp, ce, gmf, groupama, maaf, maif, matmut, swisslife } from "@/assets/shared";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const AssurancesComponent = () => {
    
    return (
        <section id="assurance" >
            <div className="container">
                <h2 className="title">Nos assurances</h2>
                <p className="subtitle">La majorité des assureurs prennent en charge jusqu’à 100% de nos interventions.</p>

                <Splide aria-label="Serrurier assurance" options={ {
                    type: "loop",
                    perPage: 5,
                    pagination: false,
                    speed: 500,
                    gap   : '1rem',
                    breakpoints: {
                        640: {
                          perPage: 3
                        },
                        992: {
                            perPage: 4
                        }
                      }
                } }>
                    <SplideSlide>
                        <Image src={swisslife} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <Image src={allianz} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <Image src={axa} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <Image src={bnp} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <Image src={ce} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <Image src={gmf} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <Image src={groupama} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <Image src={maaf} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <Image src={maif} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <Image src={matmut} alt=""/>
                    </SplideSlide>
                </Splide>

            </div>
        </section>
    );
};

export default AssurancesComponent;