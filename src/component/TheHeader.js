import React, { useContext } from "react";
import { MyContext } from "./myContext";

export function TheHeader(props) {
  const { addTodo } = useContext(MyContext);

  function handleKeyPress(event) {
    if (event.key === "Enter" && event.target.value) {
      addTodo(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyUp={handleKeyPress}
      />
    </header>
  );
}
