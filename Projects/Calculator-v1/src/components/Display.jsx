import React from "react";
import styles from "../assets/css/Display.module.css";

function Display() {
  return (
    <div className="mb-2">
      <input
        type="text"
        className={`form-control w-100 rounded focus-ring ${styles.noFocusRing}`}
      />
    </div>
  );
}

export default Display;
