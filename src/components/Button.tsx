import s from './Button.module.css'

type Props = {
  title: string;
  onClick: () => void;
};
export const Button = ({ title, onClick }: Props) => {
  return <button className={s.button} onClick={onClick}>{title}</button>;
};

