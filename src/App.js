import React, { useState } from "react";
import Buttons from "./components/buttons";
import Input from "./components/input";
import "./styles.css";

function App() {
  const [value, setValue] = useState();
  return (
    <div className="page">
      <div className="header">
        <div className="header__container">Calculator</div>
      </div>
      <div className="content">
        <div className="calculator">
          <Input value={value} />
          <Buttons value={value} setValue={setValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
