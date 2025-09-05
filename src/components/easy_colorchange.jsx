"use client";
import { useState } from "react";
export const Changecolor = () => {
  const [color, setColor] = useState("bg-white text-black h-100 w-100");

  const handleonchange = (event) => {
    const optioncolor = event.target.value;
    console.log(optioncolor);
    setColor(optioncolor);
  };
  return (
    <div>
      <select name="Select color" id="" onChange={handleonchange}>
        <option value="bg-blue-600 text-black h-100 w-100">Blue</option>
        <option value="bg-red-600 text-black h-100 w-100">Red</option>
        <option value="bg-gray-600 text-black h-100 w-100">Gray</option>
        <option value="bg-green-600 text-black h-100 w-100">Green</option>
      </select>
      <div className={color}></div>
    </div>
  );
};
