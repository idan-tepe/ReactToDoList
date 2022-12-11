import { useRef, useState } from "react";
import "./App.css";

import { ToDoApp } from "./component/ToDoApp";

function App() {
  const [titles, setTitels] = useState([]);
  const input_ref = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const [user, setUser] = useState({ userName: null, passWord: null });

  function handleUserNamePassWord() {
    user.userName = username.current.value;
    user.passWord = password.current.value;
    setUser({ ...user });
  }

  function clickOnButtonAddToList() {
    titles.push(input_ref.current.value);
    setTitels([...titles]);
  }

  return (
    <>
      {user.userName && user.passWord ? (
        <>
          <input ref={input_ref} type="text" />
          <button onClick={clickOnButtonAddToList}>ADD LIST</button>
          {titles.map((name) => {
            return <ToDoApp appTitle={name} key={name} />;
          })}
        </>
      ) : (
        <>
          <input ref={password} type="text" placeholder={"username"} />
          <input ref={username} type="password" placeholder={"password"} />
          <button onClick={handleUserNamePassWord}>sign in</button>
        </>
      )}
    </>
  );
}

export default App;
