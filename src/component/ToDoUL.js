import React, { useContext, useState } from "react";
import { MyContext } from "./myContext";

export function ToDoUL() {
  const { todos, removeToDo, handleCheckBox, handleEnter } =
    useContext(MyContext);

  let [editToggle, setToggle] = useState([]);

  function handleDBClick(e, item) {
    console.log("double click");
    editToggle = item.id;
    setToggle(editToggle);
  }

  function setNewText(e, item) {
    if (e.key === "Enter") {
      console.log("enter pressed");
      const text = e.target.value;
      editToggle = "";
      setToggle(editToggle);

      handleEnter(text, item);
    }
  }

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li
          className={
            item.completed
              ? "completed"
              : "" + (item.id === editToggle ? "editing" : "")
          }
        >
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCheckBox(item)}
            />
            <label
              onDoubleClick={(e) => {
                handleDBClick(e, item);
              }}
            >
              {item.title}
            </label>
            <button className="destroy" onClick={() => removeToDo(item)} />
          </div>
          <input
            key={item.title}
            defaultValue={item.title}
            className="edit"
            onKeyUp={(e) => {
              setNewText(e, item);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
