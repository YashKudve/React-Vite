import { useState, useCallback, useEffect, useRef } from "react";
import { Checkmark } from "react-checkmark";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()+=/*-[]{}/?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  // useEffect hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  // useRef hook
  const passwordRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }, [password]);

  return (
    <>
      <h1 className="text-4xl text-center text-white font-extrabold">
        Password Generator
      </h1>

      <div className="h-100vh w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 m-10">
        <h2 className="text-center">Password</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 m-5">
          <input
            type="text"
            value={password}
            className="w-full py-1 px-3 outline-none text-black"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-orange-500 text-gray-700 p-2 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-5 p-3 text-green-600 font-extrabold text-lg text-center rounded w-1/2">
          <Checkmark size="24px" /> Copied to Clipboard
        </div>
      )}
    </>
  );
}

export default App;
