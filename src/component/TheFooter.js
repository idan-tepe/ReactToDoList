import React from "react";

export function TheFooter({ clearAllCompleted, itemLeftCount }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemLeftCount}</strong> items left
      </span>
      <button className="clear-completed" onClick={clearAllCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
