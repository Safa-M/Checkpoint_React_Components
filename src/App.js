import './App.css';
import React from "react";
import ProfPhot from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">

        <ProfPhot />
        <FullName />
        <Address />
 
      </header>
    </div>
    </>
  );
}

export default App;
