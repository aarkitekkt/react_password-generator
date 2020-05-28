import React, { useState } from 'react';
import "./index.css";
import Landing from "./Components/Landing";
import Length from "./Components/Length";
import UpperCase from './Components/UpperCase';
import Numbers from "./Components/Numbers";
import Special from "./Components/Special";
import Password from "./Components/Password";


function App() {


  const [passwordState, setPasswordState] = useState(
    {
      length: 8,
      uppercase: false,
      numbers: false,
      special: false
    }
  );

  function updateLength() {
    console.log("nice click, bro!");
  }


  function handleChange(event) {
    console.log("you changed the number!")
    setPasswordState({ ...passwordState, length: parseInt(event.target.value) });
  }

  function setUppercaseTrue() {
    console.log("uppercase affirmative");
    setPasswordState({ ...passwordState, uppercase: true });
  }

  function setUppercaseFalse() {
    console.log("uppercase negatory");
    setPasswordState({ ...passwordState, uppercase: false });
  }

  function setNumbersTrue() {
    console.log("numbers affirmative");
    setPasswordState({ ...passwordState, numbers: true });
  }

  function setNumbersFalse() {
    console.log("numbers negatory");
    setPasswordState({ ...passwordState, numbers: false });
  }

  function setSpecialTrue() {
    console.log("special affirmative");
    setPasswordState({ ...passwordState, special: true });
  }

  function setSpecialFalse() {
    console.log("special negatory");
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
        onClick={updateLength}
        onChange={handleChange}
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
        to="length" />
    </div>
  );
}

export default App;
