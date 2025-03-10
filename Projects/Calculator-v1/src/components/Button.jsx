import React from "react";

function Button({ button }) {
  return (
    <div className="col-3">
      <button className="w-100 btn btn-light">{button}</button>
    </div>
  );
}

export default Button;
