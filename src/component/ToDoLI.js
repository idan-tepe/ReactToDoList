import React from "react";
import LiLable from "./LiLable";

export default function ToDoLI() {
  return (
    <li>
      <div className="view">
        <input class="toggle" type="checkbox" />
        <LiLable />
        <button className="destroy" />
      </div>
      <input className="edit" />
    </li>
  );
}
