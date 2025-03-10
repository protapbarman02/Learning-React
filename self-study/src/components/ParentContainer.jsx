import React from "react";

function ParentContainer({ children }) {
  return <div className="border p-4">{children}</div>;
}

export default ParentContainer;
