import { useState } from "react";
import "./App.css";
import LoginForm from "./LoginForm";
import Home from "./Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [UserName, setUserName] = useState(false);
  const onLoginChangeHandler = (state, UserName) => {
    setIsLoggedIn(state);
    setUserName(UserName);
  };
  return (
    <div className="app-wrapper">
      {isLoggedIn ? (
        <Home name={UserName} />
      ) : (
        <LoginForm onLoginChange={onLoginChangeHandler} />
      )}
    </div>
  );
}

export default App;
