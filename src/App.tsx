import { useState } from "react";
import "./App.css";
import { CardsSettings } from "./components/randomColorCard/CardsSettings";
import { RandomColorCard } from "./components/randomColorCard/RandomColorCard";

function App() {
  const [colors, setColors] = useState<string[]>(['']);
  const [count, setCount] = useState(1);
  const [cardCount, setCardCount] = useState(1);

 

  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      <CardsSettings
        setColors={setColors}
        count={count}
        setCount={setCount}
        cardCount={cardCount}
        setCardCount={setCardCount}
      />
      {[...Array(cardCount)].map((_, index) => (
        <RandomColorCard key={index} color={colors[index]} />
      ))}
    </div>
  );
}

export default App;
