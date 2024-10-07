import s from './RandomColorTitle.module.css'

type Props = {
  colorRgb: string;
};
export const RandomColorTitle = ({ colorRgb }: Props) => {
  return <span>{`RGB: ${colorRgb}`}</span>;
};
