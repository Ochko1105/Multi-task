"use client";
import { useState } from "react";
export const Characterfield = () => {
  const [inputvalue, setInputvalue] = useState("");
  const handleonchange = (event) => {
    setInputvalue(event.target.value);
  };
  return (
    <div>
      <input value={inputvalue} type="text" onChange={handleonchange} />
      <p>Input text : {inputvalue.length}</p>
    </div>
  );
};
