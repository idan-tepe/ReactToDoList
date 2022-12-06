import React from "react";

import { ToDoUL } from "./ToDoUL";

export function TheMain({ items, removeToDo, toggleAll }) {
  function handleToggle() {
    toggleAll();
  }
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" onClick={handleToggle} />
      <ToDoUL items={items} removeToDo={removeToDo} />
    </section>
  );
}
