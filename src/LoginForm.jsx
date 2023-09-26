import { useState } from "react";
import { login } from "./util/login";

//======= LOGIN FORM ======
const LoginForm = ({ onLoginChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let disableLoggingBtn = password.length < 6 || !email;
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login({ email, password });
      setLoading(false);
      onLoginChange(true, email);
    } catch (error) {
      setLoading(false);
      setError(error);
      onLoginChange(false);
    }
  };
  return (
    <form className="login-wrapper" onSubmit={submitHandler}>
      <div className="row">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email here"
          autoComplete="email"
          value={email}
          onChange={emailHandler}
        />
      </div>
      <div className="row">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          autoComplete="password"
          value={password}
          onChange={passwordHandler}
        />
      </div>
      {error && <p>{error.message}</p>}
      {loading && <p>Loading...</p>}
      <button
        className="btn primary"
        type="submit"
        disabled={disableLoggingBtn}
      >
        Login
      </button>
    </form>
  );
};
export default LoginForm;
