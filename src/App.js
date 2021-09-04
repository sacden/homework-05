import React, { useState } from "react";
import Buttons from "./components/buttons";
import Input from "./components/input";
import "./styles.css";

function App() {
  return (
    <div className="page">
      <div className="header">
        <div className="header__container">Calculator</div>
      </div>
      <div className="content">
        <div className="calculator">
          <Input />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
