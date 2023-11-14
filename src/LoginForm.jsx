// ======= LOGIN FORM ======
// Steps
// 01. Disable the login button in the initial state.
// 02. Enable the login button when the user types at least 3 characters in the password field.
// 03. Display email and password in the console upon form submission.
// 04. Utilize login.js to authenticate the username and password and display an error message for incorrect input values.
// 05. Upon successful login, display the Home page with a welcome message containing the user's name. (The Home page should be a separate component)
// 06. Display a list of categories on the Home page.
// 07. Display items under the respective category headers and style them.
import { useState } from "react";
import { login } from "./util/login";
// import Home from "./Home";

const LoginForm = ({setUserEmail2}) => {
  const [isActiveLogin, setIsActiveLogin] = useState(false);
  const [error, setError] = useState("");
  
  const passwordValidate = ()=>{
    let passwordCount = document.getElementById("password").value.length;
    if(passwordCount >= 3){
      setIsActiveLogin(true);
    }
  }

  const submitForm = (event)=>{
    event.preventDefault();

    const credentials = {
      email: event.target[0].value,
      password: event.target[1].value,
    }
  
    login(credentials)
    .then(()=>{
      setError("");
      setUserEmail2(credentials.email);
    })
    .catch((e)=>{
      console.log(e);
      setError(e.toString());
      setUserEmail2("");
    })
  }

  return (
    <>
    {
      <form className="login-wrapper" onSubmit={submitForm}>
      <div className="row">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email here"
          // onChange={setEmail}
        />
      </div>
      <div className="row">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={passwordValidate}
        />
      </div>
      {
        error
      }
      <button 
      disabled={!isActiveLogin}
      className="btn primary" 
      type="submit">
        Login
      </button>
    </form>
    }
  </>
  );
};
export default LoginForm;
