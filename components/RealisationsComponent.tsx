import { FC } from "react";
import Image from "next/image"
import Link from "next/link"
import { realisation1, realisation2, realisation3, realisation4 }  from "@/assets/shared";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const RealisationsComponent: FC = () => {
    return (
        <section id="realisations" >
            <div className="container">
                <h2 className="title">Nos réalisations</h2>
                <p className="subtitle">Fière du travail de nos artisans serruriers.</p>

                <Splide aria-label="Serrurier assurance" options={ {
                    type: "loop",
                    perPage: 4,
                    pagination: false,
                    speed: 500,
                    gap   : '1rem',
                    breakpoints: {
                        440: {
                            perPage: 1
                        },
                        640: {
                          perPage: 2
                        },
                        992: {
                            perPage: 3
                        }
                      }
                } }>
                    <SplideSlide>
                       <div>
                            <Image src={realisation1} alt="" width="400" height="300"/>
                       </div>
                    </SplideSlide>
                    <SplideSlide>
                       <div>
                            <Image src={realisation2} alt="" width="400" height="300"/>
                       </div>
                    </SplideSlide>
                    <SplideSlide>
                       <div>
                            <Image src={realisation3} alt="" width="400" height="300"/>
                       </div>
                    </SplideSlide>
                    <SplideSlide>
                       <div>
                            <Image src={realisation4} alt="" width="400" height="300"/>
                       </div>
                    </SplideSlide>
                    <SplideSlide>
                       <div>
                            <Image src={realisation1} alt="" width="400" height="300"/>
                       </div>
                    </SplideSlide>
                    <SplideSlide>
                       <div>
                            <Image src={realisation2} alt="" width="400" height="300"/>
                       </div>
                    </SplideSlide>
                    <SplideSlide>
                       <div>
                            <Image src={realisation3} alt="" width="400" height="300"/>
                       </div>
                    </SplideSlide>
                    <SplideSlide>
                       <div>
                            <Image src={realisation4} alt="" width="400" height="300"/>
                       </div>
                    </SplideSlide>
                    
                </Splide>

                <Link href="/realisations" className="btn-realisations">Voir toutes nos réalisations</Link>

            </div>
        </section>
    );
};

export default RealisationsComponent;
