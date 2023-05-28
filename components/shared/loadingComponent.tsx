import {FC} from "react";
import Image from "next/image"
import { loadingIcon } from "@/assets/icons";

const Loading: FC = () => {
  return (
    <div className="loading">
      <Image src={loadingIcon} alt="Loading" />
      <span>Veuillez patienter</span>
    </div>
  );
};

export default Loading;