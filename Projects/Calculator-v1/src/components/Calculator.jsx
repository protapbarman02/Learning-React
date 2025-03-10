import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

function Calculator() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-6 border rounded py-3">
          <p className="text-center p-0 mb-2 border-bottom">Basic Calculator</p>
          <Display />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
