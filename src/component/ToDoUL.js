import React, { useState } from "react";

export function ToDoUL({ items, removeToDo, handleCheckBox, handleEnter }) {
  let [editToggle, setToggle] = useState([]);

  function handleDBClick(e, item) {
    console.log("double click");
    editToggle = item.id;
    setToggle(editToggle);

    // e.target.parentNode.parentNode.classList.toggle("editing");
    // e.target.parentNode.nextSibling.value = item.title;
  }

  function setNewText(e, item) {
    if (e.key === "Enter") {
      console.log("enter pressed");
      const text = e.target.value;
      editToggle = "";
      setToggle(editToggle);
      // e.target.parentNode.classList.toggle("editing");

      handleEnter(text, item);
    }
  }

  return (
    <ul className="todo-list">
      {items.map((item) => (
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
