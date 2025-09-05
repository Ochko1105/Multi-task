"use client";
import { useState } from "react";

export const Toggle = () => {
  const [visible, setVisible] = useState(true);
  const handleonclick = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button onClick={handleonclick}>Show/hide</button>
      {visible ? <p>toggle me</p> : ""}
    </div>
  );
};
