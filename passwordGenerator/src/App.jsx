import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
  }, [length, numAllowed, charAllowed, setPassword]);
  return (
    <>
      <h1 className="text-4xl text-center text-white font-extrabold">
        Password Generator
      </h1>
    </>
  );
}

export default App;
