import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { logoSecuriclefs } from "@/assets/shared";
import Image, { StaticImageData } from "next/image";
import BurgerComponent from "./burger-component";
import { useNavSettingsContext } from "@/context/nav-settings-context";
import PhoneButton from "../shared/phoneButtonComponent";

export enum NavLinkEnum {
  Home = "Home",
  Services = "Comment ça marche ?",
  Tarifs = "Nos tarifs",
  Faq = "F.A.Q",
  Realisations = "Nos realisations",
}
export const getPathFromNavLink: (navLink: NavLinkEnum) => string = (
  navLink: NavLinkEnum
) => {
  switch (navLink) {
    case NavLinkEnum.Home:
      return "/";
    case NavLinkEnum.Services:
      return "/#service";
    case NavLinkEnum.Tarifs:
      return "/#tarifs";
    case NavLinkEnum.Faq:
      return "/#faq";
    case NavLinkEnum.Realisations:
      return "/realisations/";
  }
};

const NavComponent: FC = () => {
  const { navIsClosed, setNavIsClosed, closing } = useNavSettingsContext();
  const navRef = useRef<HTMLDetailsElement>(null);

  const [linksAreVisible, setLinksAreVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = "screen and (min-width: 1024px)";

    const handleMatchMedia = () => {
      setNavIsClosed(true);

      setLinksAreVisible(false);

      window.setTimeout(() => setLinksAreVisible(true), 800);
    };

    try {
      window
        .matchMedia(mediaQuery)
        .addEventListener("change", handleMatchMedia);
    } catch (error) {
      window.matchMedia(mediaQuery).addListener(handleMatchMedia);
    }
  }, [setNavIsClosed]);

  useEffect(() => {
    if (!navRef.current || window === undefined) return;
    const nav = navRef.current;

    let timeOut;

    if (navIsClosed && !closing) {
      timeOut = window.setTimeout(() => {
        nav.style.height = "100px";
      }, 800);
    }

    if (closing || !navIsClosed) {
      nav.style.height = "auto";
      window.clearTimeout(timeOut);
    }
  }, [closing, navIsClosed]);

  return (
    <nav
      className={
        "h-[100px] md:h-[140px] bg-white overflow-x-clip fixed inset-0 z-50 grid content-center justify-items-start gap-4 px-[5vw] py-6 before:fixed  before:inset-0 before:bg-cas-black-400 before:transition-all lg:absolute lg:bottom-[initial] lg:flex lg:gap-10 lg:py-8 lg:before:hidden " +
        `${
          navIsClosed
            ? " background-nav fixed before:translate-x-full before:delay-[500ms] before:rounded-l-[48%]"
            : " fixed"
        }`
      }
      ref={navRef}
    >
      <BurgerComponent />

      <NavLinkComponent
        img={logoSecuriclefs}
        href={"/"}
        navLink={NavLinkEnum.Home}
        supplentaryClasses={
          "absolute top-5 left-[20vw]  block w-[50px] lg:static lg:my-auto  lg:w-[64px]"
        }
      />

      {linksAreVisible &&
        navLinks.map((link, i) => {
          const { navLink, supplementaryClasses } = link;
          const href = getPathFromNavLink(navLink);

          if (link.navLink != "Home") {
            return (
              <NavLinkComponent
                key={i}
                navLink={navLink}
                href={href}
                supplentaryClasses={supplementaryClasses}
              />
            );
          }
        })}

      {/* <PhoneButton supplentaryClasses=" absolute top-5 left-[40vw]" /> */}
      <PhoneButton supplentaryClasses="absolute top-8 right-[5vw] md:grid !pl-0  pr-3 md:pl-2 md:pr-4 !text-[8px]" />
    </nav>
  );
};

export default NavComponent;

const navLinks = [
  {
    navLink: NavLinkEnum.Services,
    supplementaryClasses: "md:mt-8 lg:ml-4 delay-[100ms]",
  },
  {
    navLink: NavLinkEnum.Tarifs,
    supplementaryClasses: "md:mt-8 delay-[200ms]",
  },
  {
    navLink: NavLinkEnum.Faq,
    supplementaryClasses: "md:mt-8 lg:mr-auto delay-[300ms]",
  },
  // {
  //   navLink: NavLinkEnum.Realisations,
  //   supplementaryClasses: "delay-[200ms]",
  // },
];

interface NavLinkComponentProp {
  href: string;
  navLink: NavLinkEnum;
  supplentaryClasses: string;
  img?: string | StaticImageData;
}
const NavLinkComponent: FC<NavLinkComponentProp> = ({
  href,
  supplentaryClasses,
  navLink,
  img,
}) => {
  const { navIsClosed, setNavIsClosed, activeNavLink } =
    useNavSettingsContext();

  return (
    <Link
      href={href}
      className={
        "z-0 self-center text-[24px] font-semibold no-underline transition-all lg:translate-x-0 lg:text-[20px] lg:font-normal" +
        ` ${supplentaryClasses} ${
          navIsClosed && !img ? "translate-x-[100vw]" : "translate-x-0"
        } 
                    ${activeNavLink === navLink && "link-active"}`
      }
      onClick={() => setNavIsClosed(true)}
    >
      {img ? (
        <Image className="max-w-[200%] " src={img} alt="logo serrurier" />
      ) : (
        navLink
      )}
    </Link>
  );
};
