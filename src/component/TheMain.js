import React from "react";
import CheckBoxInput from "./CheckBoxInput";
import ToDoUL from "./ToDoUL";

export default function TheMain() {
  return (
    <section className="main">
      <CheckBoxInput />
      <ToDoUL />
    </section>
  );
}
