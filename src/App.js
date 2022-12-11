import { useRef, useState } from "react";
import "./App.css";

import { ToDoApp } from "./component/ToDoApp";

function App() {
  const [titles, setTitels] = useState([]);
  const title_ref = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const [user, setUser] = useState({ userName: null, passWord: null });

  function handleUserNamePassWord() {
    user.userName = username.current.value;
    user.passWord = password.current.value;
    setUser({ ...user });
  }

  function clickOnButtonAddToList() {
    titles.push(title_ref.current.value);
    setTitels([...titles]);
  }

  return (
    <>
      {user.userName && user.passWord ? (
        <>
          <input ref={title_ref} type="text" />
          <button onClick={clickOnButtonAddToList}>ADD LIST</button>
          {titles.map((name) => {
            return <ToDoApp appTitle={name} key={name} />;
          })}
        </>
      ) : (
        <>
          <input
            ref={username}
            type="text"
            placeholder={"username"}
            key="user_input"
          />
          <input ref={password} type="password" placeholder={"password"} />
          <button onClick={handleUserNamePassWord}>sign in</button>
        </>
      )}
    </>
  );
}

export default App;
