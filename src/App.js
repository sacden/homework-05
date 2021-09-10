import React, { useState } from "react";
import Buttons from "./components/buttons";
import Input from "./components/input";
import * as math from "mathjs";
import "./styles.css";

function App() {
  const [value, setValue] = useState();

  const inputHandler = (e) => {
    try {
      let expression = e.target.innerText;
      if (expression === "AC") {
        setValue();
      } else if (expression === "=") {
        setValue(math.evaluate(value));
      } else {
        value === undefined ? setValue(expression) : setValue(value + expression);
      }
    } catch (e) {
      alert("Вы ввели неправильные данные");
    }
  };
  return (
    <div className="page">
      <div className="header">
        <div className="header__container">Calculator</div>
      </div>
      <div className="content">
        <div className="calculator">
          <Input value={value} />
          <Buttons value={value} setValue={setValue} inputHandler={inputHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
