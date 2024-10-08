import { RandomColorItem } from "./randomColorItem/RandomColorItem";
import { RandomColorTitle } from "./randomColorTitle/RandomColorTitle";

import s from "./RandomColorCard.module.css";

type Props = {
  color: string;
};
export const RandomColorCard = ({ color }: Props) => {
  return (
    <div className={s.card}>
      <RandomColorItem backgroundColor={color} />
      <RandomColorTitle colorRgb={color} />
    </div>
  );
};
