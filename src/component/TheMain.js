import React from "react";

import ToDoUL from "./ToDoUL";

export function TheMain({ items }) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ToDoUL items={items} />
    </section>
  );
}
