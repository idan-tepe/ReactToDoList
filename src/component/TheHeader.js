import React from "react";
import NewInput from "./NewInput";
import Title from "./Title";

export default function TheHeader() {
  return (
    <header className="header">
      <Title />
      <NewInput />
    </header>
  );
}
