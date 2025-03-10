import React from "react";

function CurrentTime() {
  let time = new Date();
  return (
    <div>
      <p>CurrentTime is {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default CurrentTime;
