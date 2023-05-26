import { FC } from "react";

import { NavSettingsProvider } from "@/context/nav-settings-context";
import NavComponent from "@/components/nav";
import FooterComponent from "@/components/FooterComponent";

interface Props {
  children: JSX.Element;
}

const LayoutComponent: FC<Props> = ({ children }) => {
  return (
    <>
      <NavSettingsProvider>
        <NavComponent />
        {children}
      </NavSettingsProvider>
      <FooterComponent />
    </>
  );
};

export default LayoutComponent;
