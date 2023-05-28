import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { instagram, tiktok, facebook, whatsapp } from "@/assets/icons";
import PhoneButton from "@/components/shared/phoneButtonComponent";
import { useInView } from "react-intersection-observer";

const UrgenceComponent: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <section id="reseaux">
        <div className="container">
          <h2 ref={ref} className={inView ? "title animate__animated animate__fadeInUp" : "title"}>Nos réseaux</h2>
          <p ref={ref} className={inView ? "subtitle animate__animated animate__fadeInUp" : "subtitle"}>
            Restez en contact avec nos dernières actualités
          </p>

          <div className="grid-container">
            <div>
              <Link
                href="https://www.instagram.com/securiclefs/"
                target="_blank" ref={ref} className={inView ? " animate__animated animate__slideInUp" : ""}
              >
                <Image src={instagram} alt="serrure porte fenêtre" width={70} height={70} />
                <span>@securiclefs</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@securiclefs?_t=8cWqrwXS8BX&_r=1"
                target="_blank" ref={ref} className={inView ? " animate__animated animate__slideInUp" : ""}
              >
                <Image src={tiktok} alt="porte fermée" width={70} height={70} />
                <span>@securiclefs</span>
              </Link>
              {/* <Link href="">
                                <Image src={facebook} alt="" width={70} height={70}  />
                                <span>@securiclefs</span>
                            </Link> */}
              <Link href="https://wa.link/uaapxv" target="_blank" ref={ref} className={inView ? " animate__animated animate__slideInUp" : ""}>
                <Image src={whatsapp} alt="dépanner" width={70} height={70} />
                <span>@securiclefs</span>
              </Link>
            </div>
            <div>
              <h3 ref={ref} className={inView ? " animate__animated animate__slideInUp" : ""}>Équipe réactive aux messages</h3>
              <p ref={ref} className={inView ? " animate__animated animate__slideInUp" : ""}>N’hésitez pas à nous contacter sur ces réseaux</p>
            </div>
          </div>
        </div>
      </section>
      <section id="urgence">
        <div className="container">
          <h2 ref={ref} className={inView ? "title animate__animated animate__slideInRight" : "title"}>Une urgence</h2>
          <p ref={ref} className={inView ? "subtitle animate__animated animate__slideInRight" : "subtitle"}>
            N&apos;attendez pas, l&apos;appel et le devis sont gratuits.
          </p>
          <PhoneButton />
        </div>
      </section>
    </>
  );
};

export default UrgenceComponent;
