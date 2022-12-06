import React from "react";

export function ToDoUL({ items, removeToDo }) {
  function handleDel(item) {
    removeToDo(item);
  }
  function handleCheckBox(item) {
    item.completed = !item.completed;
    console.log(item);
  }
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li>
          <div className="view">
            <input
              class="toggle"
              type="checkbox"
              onChange={() => handleCheckBox(item)}
            />
            <label>{item.title}</label>
            <button className="destroy" onClick={() => handleDel(item)} />
          </div>
          <input className="edit" />
        </li>
      ))}
    </ul>
  );
}
