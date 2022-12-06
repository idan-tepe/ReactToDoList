import "./App.css";
import { TheHeader } from "./component/TheHeader";
import { TheMain } from "./component/TheMain";
import { TheFooter } from "./component/TheFooter";

function App() {
  function addTodo(content) {
    todos.push({ title: content, completed: false });
    console.log(todos);
  }

  function removeToDo(item) {
    todos = todos.filter((todo) => todo !== item);
    console.log(todos);
  }

  function clearAllCompleted() {
    todos = todos.filter((todo) => !todo.completed);
    console.log(todos);
  }

  const appTitle = "ToDoList";
  let todos = [
    { title: "Learn React", completed: false },
    { title: "Listen to Nir React", completed: false },
    { title: "Learn JS", completed: false },
  ];
  return (
    <section class="todoapp">
      <TheHeader title={appTitle} addTodo={addTodo} />
      <TheMain items={todos} removeToDo={removeToDo} />
      <TheFooter clearAllCompleted={clearAllCompleted} />
    </section>
  );
}

export default App;
