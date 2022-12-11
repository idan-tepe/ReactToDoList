import { useEffect, useState } from "react";

export function useAllFunctions() {
  const [todos, setTodos] = useState([]);
  const [cnt, setCnt] = useState([0]);

  useEffect(() => {
    const unmarked = todos.filter((todo) => !todo.completed);

    setCnt(unmarked.length);
  }, [todos]);

  function addTodo(content) {
    const newTodos = todos.concat([
      { id: Date.now(), title: content, completed: false },
    ]);
    setTodos(newTodos);
    console.log(newTodos);
  }

  function removeToDo(item) {
    const newTodos = todos.filter((todo) => todo.id !== item.id);
    setTodos(newTodos);
    console.log(newTodos);
  }

  function clearAllCompleted() {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
    console.log(newTodos);
  }

  function toggleAll(checkedValue) {
    const newTodos = todos.map((todo) => ({
      ...todo,
      completed: checkedValue,
    }));
    setTodos(newTodos);
    console.log(newTodos);
  }

  function handleCheckBox(item) {
    item.completed = !item.completed;
    setTodos([...todos]);
  }

  function handleEnter(title, item) {
    item.title = title;
    setTodos([...todos]);
    console.log(todos);
  }
  return {
    addTodo,
    removeToDo,
    clearAllCompleted,
    toggleAll,
    handleCheckBox,
    handleEnter,
    cnt,
    todos,
  };
}
