import React from "react";
import styles from "../assets/css/Display.module.css";

function Display({ displayValue }) {
  return (
    <div className="mb-2">
      <input
        type="text"
        className={`form-control w-100 rounded focus-ring ${styles.noFocusRing} border border-dark text-end`}
        value={displayValue.join("")}
        disabled
      />
    </div>
  );
}

export default Display;
