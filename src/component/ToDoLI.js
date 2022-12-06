import React from "react";

export default function ToDoLI({ title }) {
  return (
    <li>
      <div className="view">
        <input class="toggle" type="checkbox" />
        <label>{title}</label>
        <button className="destroy" />
      </div>
      <input className="edit" />
    </li>
  );
}
