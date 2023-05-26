import { FC, useState  } from "react";
import Image from "next/image"
import { service1, service2, service3, service4, service5, service6,
    service7, service8, service9, service10, service11, service12,
    service13, service14, service15, service16, service17, service18 } from "@/assets/icons";
import PhoneButton  from "@/components/shared/phoneButtonComponent";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const ServicesComponent: FC = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index: any) => {
        setActiveIndex(index);
    };

    const handleItemHover = (index: any) => {
        setActiveIndex(index);
    };

    const handleItemLeave = () => {
        setActiveIndex(null);
    };

    return (
        <section id="service">
            <div className="container">
                <Splide aria-label="Serrurier services" options={ {
                        type: "loop",
                        perMove: 1,
                        pagination: false,
                        autoWidth: true,
                        arrows: true,
                        autoplay: false,
                        speed: 500,
                        gap   : '1rem',
                        breakpoints: {
                            480: {
                                perPage: 4
                            },
                            640: {
                                perPage: 5
                            },
                            992: {
                                perPage: 6
                            }
                        }
                    } }>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 1 ? 'active' : ''}`}>
                            <h2>Ouverture de porte claquée</h2>
                            <p>Si votre porte a été fermée mais non verrouillée, nous effectuons une ouverture à l'aide d'outils spécialisés pour éviter d'endommager la porte.</p>
                        </div>
                        <div className={`bullet ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)} onMouseEnter={() => handleItemHover(1)} onMouseLeave={handleItemLeave}>
                            <Image src={service1} alt="d*" />
                        </div>
                        <span><strong>Ouverture de  <br/>porte claquée</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 2 ? 'active' : ''}`}>
                            <h2>Fermeture à clé</h2>
                            <p>Si vous avez verrouillé votre porte et perdu la clé, nous procédons au perçage du cylindre pour pouvoir déverrouiller la porte sans causer de dommages excessifs.</p>
                        </div>
                       <div className={`bullet ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)} onMouseEnter={() => handleItemHover(2)} onMouseLeave={handleItemLeave}>
                            <Image src={service2} alt="d*" />
                        </div>
                        <span><strong>Fermeture à clé</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 3 ? 'active' : ''}`}>
                            <h2>Installation de volets roulants</h2>
                            <p>Après avoir pris les mesures nécessaires, nous vous proposons l'installation de volets roulants ou le remplacement du moteur existant.</p>
                        </div>
                       <div className={`bullet ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)} onMouseEnter={() => handleItemHover(3)} onMouseLeave={handleItemLeave}>
                            <Image src={service3} alt="d*" />
                        </div>
                        <span><strong>Installation de <br/>volets roulants</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 4 ? 'active' : ''}`}>
                            <h2>Pose de serrures</h2>
                            <p>Que vous souhaitiez une serrure carénée, une serrure à 3 points ou une serrure monobloc, nous vous proposons l'installation de la serrure correspondant à vos préférences.</p>
                        </div>
                        <div className={`bullet ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleItemClick(4)} onMouseEnter={() => handleItemHover(4)} onMouseLeave={handleItemLeave}>
                            <Image src={service4} alt="d*" />
                        </div>
                        <span><strong>Pose de serrures</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 5 ? 'active' : ''}`}>
                            <h2>Installation de blocs-portes</h2>
                            <p>Que ce soit pour une porte de chambre ou une porte d'entrée, nous remplaçons le cadre et la porte selon vos préférences. Si le cadre est en bon état, nous pouvons également ne remplacer que la porte.</p>
                        </div>
                        <div className={`bullet ${activeIndex === 5 ? 'active' : ''}`} onClick={() => handleItemClick(5)} onMouseEnter={() => handleItemHover(5)} onMouseLeave={handleItemLeave}>
                            <Image src={service5} alt="d*" />
                        </div>
                        <span><strong>Installation de <br/> blocs-portes</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 6 ? 'active' : ''}`}>
                            <h2>Installation de portes anti-squat</h2>
                            <p>Après une expulsion d'appartement pour prévenir toute tentative de squat, nous vous proposons l'installation d'une porte anti-squat.</p>
                        </div>
                        <div className={`bullet ${activeIndex === 6 ? 'active' : ''}`} onClick={() => handleItemClick(6)} onMouseEnter={() => handleItemHover(6)} onMouseLeave={handleItemLeave}>
                            <Image src={service6} alt="d*" />
                        </div>
                        <span><strong>Installation de <br/> portes anti-squat</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 7 ? 'active' : ''}`}>
                            <h2>Pose de cornières anti-pinces</h2>
                            <p>Nous installons des cornières anti-pinces pour renforcer la sécurité de vos portes contre les tentatives d'effraction par ouverture à la radio ou au pied de biche.</p>
                        </div>
                        <div className={`bullet ${activeIndex === 7 ? 'active' : ''}`} onClick={() => handleItemClick(7)} onMouseEnter={() => handleItemHover(7)} onMouseLeave={handleItemLeave}>
                            <Image src={service7} alt="d*" />
                        </div>
                        <span><strong>Pose de cornières <br/> anti-pinces</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 8 ? 'active' : ''}`}>
                            <h2>Installation de paumelles</h2>
                            <p>Si votre porte penche ou frotte contre le sol, nous pouvons installer de nouvelles paumelles pour résoudre ce problème.</p>
                        </div>
                       <div className={`bullet ${activeIndex === 8 ? 'active' : ''}`} onClick={() => handleItemClick(8)} onMouseEnter={() => handleItemHover(8)} onMouseLeave={handleItemLeave}>
                            <Image src={service8} alt="d*" />
                        </div>
                        <span><strong>Installation de <br/> paumelles</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 9 ? 'active' : ''}`}>
                            <h2>Remplacement de vitrage ou de fenêtre</h2>
                            <p>En cas de vitre cassée, nous prenons les mesures nécessaires, commandons la fenêtre avec un vitrage simple, double ou feuilleté, et procédons à son remplacement complet si nécessaire.</p>
                        </div>
                       <div className={`bullet ${activeIndex === 9 ? 'active' : ''}`} onClick={() => handleItemClick(9)} onMouseEnter={() => handleItemHover(9)} onMouseLeave={handleItemLeave}>
                            <Image src={service9} alt="d*" />
                        </div>
                        <span><strong>Remplacement de <br/> vitrage ou <br/> de fenêtre</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 10 ? 'active' : ''}`}>
                            <h2>Reproduction de clé</h2>
                            <p>Si vous avez perdu ou cassé une clé, nous sommes en mesure de la reproduire.</p>
                        </div>
                        <div className={`bullet ${activeIndex === 10 ? 'active' : ''}`} onClick={() => handleItemClick(10)} onMouseEnter={() => handleItemHover(10)} onMouseLeave={handleItemLeave}>
                            <Image src={service10} alt="d*" />
                        </div>
                        <span><strong>Reproduction de clés</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 11 ? 'active' : ''}`}>
                            <h2>Installation de ferme-portes</h2>
                            <p>Les ferme-portes permettent de refermer une porte sans la claquer ou de fermer une porte trop lourde pour se refermer seule. Si votre ferme-porte ne fonctionne plus correctement ou si vous souhaitez en faire installer un là où il n'y en a pas, nous vous conseillerons sur le meilleur type de ferme-porte à utiliser.</p>
                        </div>
                        <div className={`bullet ${activeIndex === 11 ? 'active' : ''}`} onClick={() => handleItemClick(11)} onMouseEnter={() => handleItemHover(11)} onMouseLeave={handleItemLeave}>
                            <Image src={service11} alt="d*" />
                        </div>
                        <span><strong>Installation de <br/> ferme-portes</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 12 ? 'active' : ''}`}>
                            <h2>Pose de frein de sol</h2>
                            <p>Pour les portes en verre qui nécessitent une fermeture en douceur, nous recommandons l'installation d'un frein de sol adapté à votre porte après une évaluation de vos besoins.</p>
                        </div>
                        <div className={`bullet ${activeIndex === 12 ? 'active' : ''}`} onClick={() => handleItemClick(12)} onMouseEnter={() => handleItemHover(12)} onMouseLeave={handleItemLeave}>
                            <Image src={service12} alt="d*" />
                        </div>
                        <span><strong>Pose de frein <br/> de sol</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 13 ? 'active' : ''}`}>
                            <h2>Blindage de porte</h2>
                            <p>Si vous ne vous sentez pas en sécurité en raison de la faiblesse de votre porte, nous évaluerons la situation et vous proposerons le meilleur type de blindage pour renforcer la sécurité de votre porte.</p>
                        </div>
                        <div className={`bullet ${activeIndex === 13 ? 'active' : ''}`} onClick={() => handleItemClick(13)} onMouseEnter={() => handleItemHover(13)} onMouseLeave={handleItemLeave}>
                            <Image src={service13} alt="d*" />
                        </div>
                        <span><strong>Blindage de porte</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 14 ? 'active' : ''}`}>
                            <h2>Installation de bandeau ventouse</h2>
                            <p>Nous proposons l'installation d'un système de bandeau ventouse pour renforcer l'accès aux bâtiments. Ce système électrique supporte jusqu'à 300 kg par ventouse, ce qui renforce considérablement la sécurité de votre bâtiment.</p>
                        </div>
                       <div className={`bullet ${activeIndex === 14 ? 'active' : ''}`} onClick={() => handleItemClick(14)} onMouseEnter={() => handleItemHover(14)} onMouseLeave={handleItemLeave}>
                            <Image src={service14} alt="d*" />
                        </div>
                        <span><strong>Installation de <br/> bandeau ventouse</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 15 ? 'active' : ''}`}>
                            <h2>Pose de barres de pivot</h2>
                            <p> Si vos paumelles sont endommagées et que vous souhaitez les remplacer tout en renforçant la sécurité de votre porte, les barres de pivot remplaceront vos paumelles et renforceront l'accès à votre appartement ou maison.</p>
                        </div>
                       <div className={`bullet ${activeIndex === 15 ? 'active' : ''}`} onClick={() => handleItemClick(15)} onMouseEnter={() => handleItemHover(15)} onMouseLeave={handleItemLeave}>
                            <Image src={service15} alt="d*" />
                        </div>
                        <span><strong>Pose de barres <br/> de pivot</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 16 ? 'active' : ''}`}>
                            <h2>Pose de barres antipanique</h2>
                            <p>Les établissements publics sont équipés de sorties de secours avec des barres antipanique. Nous vous proposons également l'installation de ces barres pour garantir une évacuation sécurisée en cas d'urgence.</p>
                        </div>
                        <div className={`bullet ${activeIndex === 16 ? 'active' : ''}`} onClick={() => handleItemClick(16)} onMouseEnter={() => handleItemHover(16)} onMouseLeave={handleItemLeave}>
                            <Image src={service16} alt="d*" />
                        </div>
                        <span><strong>Pose de barres <br/> antipanique</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 17 ? 'active' : ''}`}>
                            <h2>Installation de sélecteurs de fermeture</h2>
                            <p>Les sélecteurs de fermeture sont installés sur les portes à deux vantaux qui s'ouvrent simultanément. Ils permettent à l'un des vantaux de se fermer avant l'autre, offrant ainsi un meilleur contrôle de la fermeture. Nous vous conseillerons sur le meilleur type de sélecteur de fermeture à installer.</p>
                        </div>
                        <div className={`bullet ${activeIndex === 17 ? 'active' : ''}`} onClick={() => handleItemClick(17)} onMouseEnter={() => handleItemHover(17)} onMouseLeave={handleItemLeave}>
                            <Image src={service17} alt="d*" />
                        </div>
                        <span><strong>Installation de  <br/> sélecteurs de fermeture</strong></span>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={`info-bulle ${activeIndex === 18 ? 'active' : ''}`}>
                            <h2>Installation de systèmes de contrôle d'accès</h2>
                            <p>Pour renforcer la sécurité de votre bâtiment, nous proposons l'installation de systèmes de contrôle d'accès tels que des lecteurs de cartes, des digicodes ou des serrures électroniques.</p>
                        </div>
                        <div className={`bullet ${activeIndex === 18 ? 'active' : ''}`} onClick={() => handleItemClick(18)} onMouseEnter={() => handleItemHover(18)} onMouseLeave={handleItemLeave}>
                            <Image src={service18} alt="d*" />
                        </div>
                        <span><strong>Installation de  <br/>systèmes de  <br/>contrôle d'accès</strong></span>
                    </SplideSlide>
                </Splide>
            </div>
        </section>
    );
};

export default ServicesComponent;