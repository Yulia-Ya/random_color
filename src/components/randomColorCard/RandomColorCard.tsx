import React, { useState } from "react";
import { RandomColorItem } from "./randomColorItem/RandomColorItem";
import { RandomColorTitle } from "./randomColorTitle/RandomColorTitle";
import { Button } from "../Button";
import s from "./RandomColorCard.module.css";




export const RandomColorCard = () => {
  const [color, setColor] = useState("");

  

  const getRandomNumber =()=>{
    return Math.floor(Math.random() * 256)
  }

  const generateRandomRgb = () => {
    const red = getRandomNumber()
    const green = getRandomNumber()
    const blue = getRandomNumber()
    const randomColor =  `${red},${green},${blue}`
    setColor(randomColor)
  };
  

  return (
    <div className={s.card}>
      <RandomColorItem backgroundColor={color}/>
      <RandomColorTitle colorRgb={color} />
      <Button title="Random color generator" onClick={generateRandomRgb} />
    </div>
  );
};
