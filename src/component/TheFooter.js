import React from "react";

export function TheFooter({ clearAllCompleted }) {
  function hendleClearAll() {
    clearAllCompleted();
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>0</strong> items left
      </span>
      <button className="clear-completed" onClick={hendleClearAll}>
        Clear completed
      </button>
    </footer>
  );
}
