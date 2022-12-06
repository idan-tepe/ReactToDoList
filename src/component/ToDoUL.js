import React from "react";
import ToDoLI from "./ToDoLI";

export default function ToDoUL({ items }) {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <ToDoLI title={item.title} />
      ))}
    </ul>
  );
}
