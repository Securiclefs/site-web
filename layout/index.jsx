import { FC } from "react";

import { NavSettingsProvider } from "@/context/nav-settings-context";
import NavComponent from "@/components/nav";
import FooterComponent from "@/components/FooterComponent";

const LayoutComponent = ({ children }) => {
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
