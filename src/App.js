import React, { useState, useEffect } from 'react';
import "./index.css";
import Landing from "./Components/Landing";
import Length from "./Components/Length";
import UpperCase from './Components/UpperCase';
import Numbers from "./Components/Numbers";
import Special from "./Components/Special";
import Password from "./Components/Password";


function App() {

  const [password, setPassword] = useState("password")
  const [generate, setGenerate] = useState({});
  const [copied, setCopied] = useState(false)

  const [passwordState, setPasswordState] = useState(
    {
      length: 15,
      uppercase: false,
      numbers: false,
      special: false
    }
  );

  useEffect(() => {
    var pw = ""
    var charOptions = {
      numbers: "0123456789",
      special: "#$%&'()*+,-./:;<=>?@^_`{|}~",
      upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    var characters = "abcdefghijklmnopqrstuvwxyz";

    if (passwordState.numbers === true) {
      characters += charOptions.numbers;
    }
    if (passwordState.special === true) {
      characters += charOptions.special;
    }
    if (passwordState.uppercase === true) {
      characters += charOptions.upper;
    }

    var createPassword = () => {
      for (var i = 0; i < passwordState.length; i++) {
        pw += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      setPassword(pw);
    }
    createPassword();
  }, [passwordState, generate])

  function regenerate() {
    setGenerate({});
  }

  // Functions to update password state depending on user selections.
  function handleChange(event) {
    setPasswordState({ ...passwordState, length: parseInt(event.target.value) });
  }

  function setUppercaseTrue() {
    setPasswordState({ ...passwordState, uppercase: true });
  }

  function setUppercaseFalse() {
    setPasswordState({ ...passwordState, uppercase: false });
  }

  function setNumbersTrue() {
    setPasswordState({ ...passwordState, numbers: true });
  }

  function setNumbersFalse() {
    setPasswordState({ ...passwordState, numbers: false });
  }

  function setSpecialTrue() {
    setPasswordState({ ...passwordState, special: true });
  }

  function setSpecialFalse() {
    setPasswordState({ ...passwordState, special: false });
  }

  return (
    <div className="App">
      <Landing
        to="length"
      />
      <Length
        id="length"
        to="uppercase"
        value={passwordState.length}
        onChange={handleChange}
        length={passwordState.length}
      />
      <UpperCase
        id="uppercase"
        to="numbers"
        clickYes={setUppercaseTrue}
        clickNo={setUppercaseFalse}
      />
      <Numbers
        id="numbers"
        to="special"
        clickYes={setNumbersTrue}
        clickNo={setNumbersFalse}
      />
      <Special
        id="special"
        to="password"
        clickYes={setSpecialTrue}
        clickNo={setSpecialFalse}
      />
      <Password
        id="password"
        to="length"
        reGen={regenerate}
        password={password}
        text={password}
        onCopy={() => setCopied(true)}
      />
    </div>
  );
}

export default App;
