import React from "react";

function Button({ button, clickHandler }) {
  return (
    <div className="col-3" onClick={(e) => clickHandler(e, button)}>
      <button className="w-100 btn btn-light border border-dark">
        {button}
      </button>
    </div>
  );
}

export default Button;
