import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState(0);
  return <div className="input">{value}</div>;
};

export default Input;
