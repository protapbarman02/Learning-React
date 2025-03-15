import React from "react";

function ErrorMessage({ errorMessage }) {
  return <div className="text-danger my-2 text-center">{errorMessage}</div>;
}

export default ErrorMessage;
