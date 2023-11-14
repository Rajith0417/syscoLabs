import "./App.css";
import Home from "./Home";
import LoginForm from "./LoginForm";
import { useState } from "react";

function App() {
  const [userEmail, setUserEmail] = useState("");

  return (
    <div className="app-wrapper">
      {userEmail === "" ? (
        <LoginForm setUserEmail2={setUserEmail}/>
      ):(
        <Home userName={userEmail}/>
      )}
    </div>
  );
}

export default App;
