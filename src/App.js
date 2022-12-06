import "./App.css";
import TheHeader from "./component/TheHeader";
import TheMain from "./component/TheMain";
import TheFooter from "./component/TheFooter";

function App() {
  return (
    <section class="todoapp">
      <TheHeader />
      <TheMain />
      <TheFooter />
    </section>
  );
}

export default App;
