import React from 'react';
import "./index.css";
import Landing from "./Components/Landing";
import Length from "./Components/Length";
import LowerCase from "./Components/LowerCase";
import UpperCase from './Components/UpperCase';
import Numbers from "./Components/Numbers";
import Special from "./Components/Special";
import Password from "./Components/Password";


function App() {
  return (
    <div className="App">
      <Landing
        to="length"
      />
      <Length
        id="length"
        to="lowercase"
      />
      <LowerCase
        id="lowercase"
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
