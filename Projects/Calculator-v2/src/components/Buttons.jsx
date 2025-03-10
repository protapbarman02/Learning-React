import React from "react";
import Button from "./Button";
import { LuDelete } from "react-icons/lu";

function Buttons({ clickHandler }) {
  const buttons = [
    "C",
    <LuDelete />,
    "**",
    "+",
    1,
    2,
    3,
    "-",
    4,
    5,
    6,
    "*",
    7,
    8,
    9,
    "/",
    ".",
    0,
    "%",
    "=",
  ];
  return (
    <div className="row g-2">
      {buttons.map((button) => (
        <Button key={button} button={button} clickHandler={clickHandler} />
      ))}
    </div>
  );
}

export default Buttons;
