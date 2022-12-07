import React from "react";

import { ToDoUL } from "./ToDoUL";

export function TheMain({
  items,
  removeToDo,
  toggleAll,
  handleCheckBox,
  handleEnter,
}) {
  function handleToggle(event) {
    toggleAll(event.target.checked);
  }
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" onChange={handleToggle} />
      <ToDoUL
        items={items}
        removeToDo={removeToDo}
        handleCheckBox={handleCheckBox}
        handleEnter={handleEnter}
      />
    </section>
  );
}
