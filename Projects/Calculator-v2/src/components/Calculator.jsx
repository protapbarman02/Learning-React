import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

function Calculator() {
  const [displayValue, setDisplayValue] = useState([0]);
  const [isDotSet, setIsDotSet] = useState(false);
  const [isInitialState, setInitialState] = useState(true);

  const isDecimal = (value) => /^-?\d+\.\d+$/.test(String(value));

  const clickHandler = (e, button) => {
    if (button === ".") {
      if (isDotSet) return;
      setDisplayValue([...displayValue, button]);
      setIsDotSet(true);
      setInitialState(false);
      return;
    }

    if (button === "C") {
      setDisplayValue([0]);
      setInitialState(true);
      setIsDotSet(false);
      return;
    }

    if (button === "=") {
      const result = eval(displayValue.join(""));
      if (isDecimal(result)) setIsDotSet(true);
      else setIsDotSet(false);
      setDisplayValue([result]);
      return;
    }

    if (typeof button === "object" && button.type?.name === "LuDelete") {
      setDisplayValue((prev) => {
        if (prev.at(-1) === ".") setIsDotSet(false);
        const updated = prev.slice(0, -1);
        if (updated.at(-1) === ".") setIsDotSet(true);
        if (updated.length === 0) {
          setInitialState(true);
          return [0];
        }
        return updated;
      });
      return;
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    if (numbers.includes(button)) {
      setDisplayValue((prev) => {
        if (isInitialState) {
          setInitialState(false);
          return [button];
        }
        return [...prev, button];
      });
      return;
    }

    const operators = ["**", "/", "*", "-", "+", "%"];
    if (operators.includes(button)) {
      setIsDotSet(false);
      setInitialState(false);

      setDisplayValue((prev) => {
        if (operators.includes(prev.at(-1))) {
          return [...prev.slice(0, -1), button];
        }
        return [...prev, button];
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-6 border border-dark rounded py-3">
          <p className="text-center p-0 mb-2 border-bottom border-dark">
            Basic Calculator
          </p>
          <Display displayValue={displayValue} />
          <Buttons clickHandler={clickHandler} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
