import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 5;

  let [counter, setCounter] = useState(10);

  const addValue = () => {
    // console.log("Value added", Math.random());
    // counter = counter + 1;
    // setCounter(counter);

    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React + Vite</h1>
      <h2>Counter Project</h2>

      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
