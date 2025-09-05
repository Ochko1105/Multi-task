"use client";
import { useState } from "react";
const Page = () => {
  const [filterstatus, setFilterstatus] = useState("All");
  const handleoncolor = (status) => {
    setFilterstatus(status);
  };
  return (
    <div>
      <div>
        <input />
        <button>Add</button>
      </div>
      <button
        onClick={() => {
          handleoncolor("All");
        }}
        className={
          "rounded-md py2 px-4 bg-gray-600 text-black" +
          `${filterstatus === "All" ? " !bg-blue-600 text-white" : ""}`
        }
      >
        All
      </button>
      <button
        onClick={() => {
          handleoncolor("Active");
        }}
        className={
          "rounded-md py2 px-4 bg-gray-600 text-black" +
          `${filterstatus === "Active" ? " !bg-blue-600 text-white" : ""}`
        }
      >
        Active
      </button>
      <button
        onClick={() => {
          handleoncolor("Completed");
        }}
        className={
          "rounded-md py2 px-4 bg-gray-600 text-black" +
          `${filterstatus === "Completed" ? " !bg-blue-600 text-white" : ""}`
        }
      >
        Completed
      </button>
    </div>
  );
};
export default Page;
