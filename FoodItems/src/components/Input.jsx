import React from "react";
import styles from "../assets/css/modules/Input.module.css";

function Input({ inputHandler, input }) {
  return (
    <>
      <input
        type="text"
        className={`form-control focus-ring ${styles.noFocusRing}`}
        onKeyDown={inputHandler}
        value={input}
      />
    </>
  );
}

export default Input;
