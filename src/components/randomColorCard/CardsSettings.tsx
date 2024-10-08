import { ChangeEvent, useEffect } from "react";
import { Button } from "../Button";
import s from "./CardsSettings.module.css";

type Props = {
  count: number;
  cardCount: number;
  setColors: (colors: string[]) => void;
  setCount: (number: number) => void;
  setCardCount: (number: number) => void;
};
export const CardsSettings = ({ count, setColors, setCount, setCardCount }: Props) => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 256);
  };

  const generateRandomRgb = () => {
    const red = getRandomNumber();
    const green = getRandomNumber();
    const blue = getRandomNumber();
    const randomColor = `${red},${green},${blue}`;
    return randomColor;
  };

  const setAmountCardValue = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.currentTarget.value));
    console.log(Number(e.currentTarget.value));
  };

  const setHandler = () => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(generateRandomRgb());
    }
    setCardCount(count);
    setColors(colors);
  };

  useEffect(() => {
    setHandler();
  }, []);

  //disabled={}
  return (
    <div className={s.settings_container}>
      <span>Number of Colors: </span>
      <input className={s.editable_input} type="number" min="0" value={count} onChange={setAmountCardValue} />
      <Button title="Generate random color" onClick={setHandler} />
    </div>
  );
};
