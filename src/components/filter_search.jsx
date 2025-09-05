"use client";
import { use, useState } from "react";
export const Filtersearch = () => {
  const items = [
    "Apple",
    "Banana",
    "Carrot",
    "Date",
    "Eggplant",
    "Fig",
    "Grape",
  ];
  const [inputvalue, setInputvalue] = useState("");
  const handleonchange = (event) => {
    setInputvalue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputvalue} onChange={handleonchange} />
      <ul>
        {items
          .filter((item) =>
            item.toLowerCase().includes(inputvalue.toLowerCase())
          )
          .map((item) => {
            return <li>{item}</li>;
          })}
      </ul>
    </div>
  );
};
