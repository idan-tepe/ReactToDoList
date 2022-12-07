import React from "react";

export function ToDoUL({ items, removeToDo, handleCheckBox, handleEnter }) {
  function handleDBClick(e, item) {
    e.target.parentNode.parentNode.classList.toggle("editing");
    e.target.parentNode.nextSibling.value = item.title;
  }

  function setNewText(e, item) {
    if (e.key === "Enter") {
      const text = e.target.value;

      e.target.parentNode.classList.toggle("editing");

      handleEnter(text, item);
    }
  }

  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li className={item.completed ? "completed" : ""}>
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
