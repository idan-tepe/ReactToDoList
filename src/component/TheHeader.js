import React from "react";

export function TheHeader(props) {
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      props.addTodo(event.target.value);
    }
  }

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autofocus
        onKeyUp={handleKeyPress}
      />
    </header>
  );
}
