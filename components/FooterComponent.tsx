import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { instagram, tiktok, facebook, whatsapp } from "@/assets/icons";

// import villesData from "./liste_villes.json";
// import villesData from "@/assets/Liste_villes_serrurier.csv"; // Import the data here
import villesData from "@/assets/liste_villes.json"; // Import the data here

const FooterComponent: FC = () => {
  const [zones, setZones] = useState<string[]>([]);

  useEffect(() => {
    setZones(villesData.map((data) => data.Ville)); // Use the data here
  }, []);
  return (
    <>
      <footer>
        <div className="container">
          <div>
            <div>
              <h3>Menu</h3>
              <Link href="#etapes">Comment ça marche ?</Link>
              <Link href="#tarifs">Nos tarifs</Link>
              <Link href="#faq">F.A.G</Link>
              <Link href="#zones">Nos zones</Link>
            </div>
            <div>
              <h3>Contact</h3>
              <Link href="tel:0769474632">07 69 47 46 32</Link>
              <Link href="/mentions-legales#mentionslegales">
                Mentions Légales
              </Link>
              <Link href="/mentions-legales#politiques">
                Politique de confidentialité
              </Link>
            </div>
            <div className="reseaux">
              <h3>Réseaux</h3>
              <div>
                <Link
                  href="https://www.instagram.com/securiclefs/"
                  target="_blank"
                >
                  <Image src={instagram} alt="" width={70} height={70} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@securiclefs?_t=8cWqrwXS8BX&_r=1"
                  target="_blank"
                >
                  <Image src={tiktok} alt="" width={70} height={70} />
                </Link>
                {/* <Link href="" target="_blank">
                  <Image src={facebook} alt="" width={70} height={70} />
                  <span>@reseau</span>
                </Link> */}
                <Link href="https://wa.link/uaapxv" target="_blank">
                  <Image src={whatsapp} alt="" width={70} height={70} />
                </Link>
              </div>
            </div>
          </div>
          <h3 className="text-center mb-8 font-bold">Mes zones</h3>
          <div>
            {zones.map((ville, index) => (
              <h4 className="text-center" key={index}>
                {ville}
              </h4>
            ))}
          </div>
        </div>
      </footer>
      <section id="end">
        <p>Copyright ©2023 Securiclefs</p>
      </section>
    </>
  );
};

export default FooterComponent;
