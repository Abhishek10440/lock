import { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function loginHandle(e) {
    e.preventDefault();

    if (!userErr && !passErr && user !== "" && password !== "") {
      alert("Login Successful");
    } else {
      alert("Please fix errors");
    }
  }

  function userHandler(e) {
    const item = e.target.value;
    setUser(item);

    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
  }

  function passwordHandler(e) {
    const item = e.target.value;
    setPassword(item);

    if (item.length < 6) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={loginHandle}>
        <input
          type="text"
          placeholder="Enter User Id"
          onChange={userHandler}
        />
        <br />
        {userErr && (
          <span style={{ color: "red" }}>User not valid</span>
        )}
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={passwordHandler}
        />
        <br />
        {passErr && (
          <span style={{ color: "red" }}>Password not valid</span>
        )}
        <br />

        <input type="date" />
        <br />

        <button type="submit" disabled={userErr || passErr}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
