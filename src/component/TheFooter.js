import React, { useContext } from "react";
import { MyContext } from "./myContext";

export function TheFooter() {
  const { cnt, clearAllCompleted } = useContext(MyContext);
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{cnt}</strong> items left
      </span>
      <button className="clear-completed" onClick={clearAllCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
