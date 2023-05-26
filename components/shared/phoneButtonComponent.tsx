import React, { FC } from "react";
import Image from "next/image";
import { phoneIcon } from "@/assets/icons";

interface BtnProp {
  supplentaryClasses?: string;
  phoneNumber?: string;
}

const PhoneButton: FC<BtnProp> = ({
  supplentaryClasses,
  phoneNumber = "0924451275",
}) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className={
        "grid grid-cols-3 py-1 px-2 contact-btn md:py-1 md:px-2 pr-4 md:pr-6 " +
        ` ${supplentaryClasses}`
      }
    >
      <Image
        src={phoneIcon}
        className="m-auto max-w-[20px]"
        alt="call phone button"
        width={44}
        height={44}
      />
      <div className="text-xs col-span-2 md:text-base">
        <p className="font-bold">07 69 47 46 32</p>
        <p>Disponible</p>
      </div>
    </a>
  );
};

export default PhoneButton;
