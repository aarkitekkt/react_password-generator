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

  return (
    <div className="App">
      <Landing
        to="length"
      />
      <Length
        id="length"
        to="uppercase"
      />
      <UpperCase
        id="uppercase"
        to="numbers"
      />
      <Numbers
        id="numbers"
        to="special"
      />
      <Special
        id="special"
        to="password"
      />
      <Password
        id="password"
        to="length" />
    </div>
  );
}

export default App;
