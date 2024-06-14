import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(form);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  return (
    <>
      <h1 className="text-center font-extrabold text-[48px]">
        Currency Converter
      </h1>
    </>
  );
}

export default App;
