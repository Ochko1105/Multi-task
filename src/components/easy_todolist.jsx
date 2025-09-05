"use client";
import { use, useState } from "react";
export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputvalue, setInputvalue] = useState("");
  const [checkbox, setCheckbox] = useState(true);
  const handlecheckbox = () => {
    setCheckbox(!checkbox);
  };
  const handleonclick = () => {
    const newtodo = [...todos, inputvalue];
    setTodos(newtodo);
    setInputvalue("");
  };
  const handleonchange = (event) => {
    setInputvalue(event.target.value);
  };
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((el, i) => index !== i);
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        className="bg-white text-black"
        value={inputvalue}
        type="text"
        onChange={handleonchange}
      />
      <button onClick={handleonclick}>Add</button>
      <ul>
        {" "}
        {todos.map((item, index) => {
          return (
            <div key={index} className="flex gap-10 ">
              <input type="checkbox" onClick={handlecheckbox} />
              {checkbox ? (
                <div>
                  {" "}
                  <li>{item}</li>
                  <button></button>
                </div>
              ) : (
                <div>
                  {" "}
                  <li className="line-through">{item}</li>
                  <button
                    className="py-1 px-1 bg-blue-500 rounded-md"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
