import { FC } from "react";
import BurgerBarComponent from "./burger-bar-component";
import { useNavSettingsContext } from "@/context/nav-settings-context";

const BurgerComponent: FC = () => {
  const { setNavIsClosed, navIsClosed, closing, setClosing } =
    useNavSettingsContext();

  const handleClick = () => {
    console.log(closing);
    if (closing) return;
    setNavIsClosed(!navIsClosed);
    if (navIsClosed) {
      setClosing(true);
      window.setTimeout(() => {
        setClosing(false);
      }, 800);
    }
  };

  return (
    <div
      className="absolute top-10 left-[5vw] grid grid-cols-[auto_22px] items-center gap-2 text-[17px] lg:hidden"
      onClick={handleClick}
    >
      {/* <span>{navIsClosed ? "Menu" : "Fermer"}</span> */}
      <div className="grid gap-[6px] w-[40px]">
        <BurgerBarComponent
          transform={
            navIsClosed ? "w-full" : "w-full translate-y-[3.5px] rotate-45"
          }
        />
        <BurgerBarComponent
          transform={navIsClosed ? "w-full " : "w-full hidden"}
        />
        <BurgerBarComponent
          transform={
            navIsClosed ? "w-full " : "w-full -translate-y-[3.5px] -rotate-45"
          }
        />
      </div>
    </div>
  );
};

export default BurgerComponent;
