import React, { useContext } from "react";
import { MyContext } from "./myContext";

import { ToDoUL } from "./ToDoUL";

export function TheMain() {
  const { toggleAll } = useContext(MyContext);

  function handleToggle(event) {
    toggleAll(event.target.checked);
  }
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" onChange={handleToggle} />
      <ToDoUL />
    </section>
  );
}
