import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { instagram, tiktok, facebook, whatsapp } from "@/assets/icons";
import PhoneButton from "@/components/shared/phoneButtonComponent";

const UrgenceComponent: FC = () => {
  return (
    <>
      <section id="reseaux">
        <div className="container">
          <h2 className="title">Nos réseaux</h2>
          <p className="subtitle">
            Restez en contact avec nos dernières actualités
          </p>

          <div className="grid-container">
            <div>
              <Link
                href="https://www.instagram.com/securiclefs/"
                target="_blank"
              >
                <Image src={instagram} alt="" width={70} height={70} />
                <span>@securiclefs</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@securiclefs?_t=8cWqrwXS8BX&_r=1"
                target="_blank"
              >
                <Image src={tiktok} alt="" width={70} height={70} />
                <span>@securiclefs</span>
              </Link>
              {/* <Link href="">
                                <Image src={facebook} alt="" width={70} height={70}  />
                                <span>@securiclefs</span>
                            </Link> */}
              <Link href="https://wa.link/uaapxv" target="_blank">
                <Image src={whatsapp} alt="" width={70} height={70} />
                <span>@securiclefs</span>
              </Link>
            </div>
            <div>
              <h3>Equipe réactive aux messages</h3>
              <p>N’hésitez pas a nous contacter sur ces réseaux</p>
            </div>
          </div>
        </div>
      </section>
      <section id="urgence">
        <div className="container">
          <h2 className="title">Une urgence</h2>
          <p className="subtitle">
            N&apos;attendez pas, l&apos;appel et le devis est gratuit.
          </p>
          <PhoneButton />
        </div>
      </section>
    </>
  );
};

export default UrgenceComponent;
