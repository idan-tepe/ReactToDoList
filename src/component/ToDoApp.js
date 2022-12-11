import { MyContext } from "./myContext";
import { TheHeader } from "./TheHeader";
import { TheMain } from "./TheMain";
import { TheFooter } from "./TheFooter";
import { useAllFunctions } from "./useAllFunctions";

export function ToDoApp({ appTitle }) {
  const allFunctions = useAllFunctions();
  return (
    <MyContext.Provider value={allFunctions}>
      <section className="todoapp">
        <TheHeader title={appTitle} />
        <TheMain />
        <TheFooter />
      </section>
    </MyContext.Provider>
  );
}
