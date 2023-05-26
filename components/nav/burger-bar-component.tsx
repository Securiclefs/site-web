import { FC } from "react";

interface Props {
  transform: string | null;
}

const BurgerBarComponent: FC<Props> = ({ transform }) => (
  <div
    className={`h-[3px] w-5/6  rounded-full bg-certiclefs-blue-600 transition-all ${transform}`}
  ></div>
);

export default BurgerBarComponent;
