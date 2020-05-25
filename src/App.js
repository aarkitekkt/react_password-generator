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
      <Landing />
      <Length />
      <LowerCase />
      <UpperCase />
      <Numbers />
      <Special />
      <Password />
    </div>
  );
}

export default App;
