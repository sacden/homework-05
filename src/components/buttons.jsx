import React from "react";

const Buttons = ({ value, setValue, inputHandler }) => {
  return (
    <div className="buttons" onClick={inputHandler}>
      <div className="operators">
        <div>+</div>
        <div>-</div>
        <div>*</div>
        <div>/</div>
      </div>
      <div className="leftPanel">
        <div className="numbers">
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
        <div className="numbers">
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="numbers">
          <div>0</div>
          <div>.</div>
          <div>AC</div>
        </div>
      </div>
      <div className="equal">=</div>
    </div>
  );
};

export default Buttons;
