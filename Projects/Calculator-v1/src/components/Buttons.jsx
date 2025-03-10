import React from "react";
import Button from "./Button";

function Buttons() {
  const buttons = [
    "C",
    "X",
    "^",
    "=",
    1,
    2,
    3,
    "/",
    4,
    5,
    6,
    "x",
    7,
    8,
    9,
    "-",
    ".",
    0,
    "%",
    "+",
  ];
  return (
    <div className="row g-2">
      {buttons.map((button) => (
        <Button key={button} button={button} />
      ))}
    </div>
  );
}

export default Buttons;
