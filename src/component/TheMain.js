import React from "react";

import { ToDoUL } from "./ToDoUL";

export function TheMain({ items, removeToDo }) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ToDoUL items={items} removeToDo={removeToDo} />
    </section>
  );
}
