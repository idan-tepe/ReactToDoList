import "./App.css";
import { TheHeader } from "./component/TheHeader";
import { TheMain } from "./component/TheMain";
import { TheFooter } from "./component/TheFooter";

function App() {
  const appTitle = "ToDoList";
  const todos = [
    { title: "Learn React", completed: false },
    { title: "Listen to Nir React", completed: false },
    { title: "Learn JS", completed: false },
  ];
  return (
    <section class="todoapp">
      <TheHeader title={appTitle} />
      <TheMain items={todos} />
      <TheFooter />
    </section>
  );
}

export default App;
