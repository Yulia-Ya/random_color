import s from "./RandomColorItem.module.css";
type Props = {
  backgroundColor: string;
};
export const RandomColorItem = ({ backgroundColor }: Props) => {
  return <div className={s.color_item} style={{ backgroundColor: `rgb(${backgroundColor})` }}></div>;
};
