import React from "react";

function ErrorMessage({ foodItems }) {
  // destructuring
  // let { foodItems } = props;

  return <>{foodItems.length === 0 && <h3>No Food</h3>}</>;
}

export default ErrorMessage;
