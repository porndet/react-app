import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Hook MouseMove Event ");
    window.addEventListener("mousemove", logMousePosition);
  
    return() => {
      window.removeEventListener('mousemove', logMousePosition);
    }
  });

  return (
    <div>
      Hook X : {x}, Y : {y}
    </div>
  );
}

export default HookMouse;
