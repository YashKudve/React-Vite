import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    userName: "Yash",
    age: 21,
  };

  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-orange-400 text-black p-6 rounded-2xl">
        Intro to tailwind
      </h1>
      <Card userName="Yash" />
      {/* <Card /> */}
    </>
  );
}

export default App;
