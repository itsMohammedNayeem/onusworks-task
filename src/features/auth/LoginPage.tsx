import { useEffect, useState } from "react";

// Use React hooks to manage local state and effects (useState, useEffect).
// Parse URL query parameters to get initialUsername and initialPassword, and store them in localStorage.
// Implement form using Formik and validate against localStorage.
// Redirect on successful login using React Router's useHistory.

const LoginPage = () => {
  const history = useHistory();
  const [initialUsername, setInitialUsername] = useState("");
  const [initialPassword, setInitialPassword] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("username");
    const password = params.get("password");
    if (username && password) {
      setInitialUsername(username);
      setInitialPassword(password);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }
  }, []);

  const validate = (values: { username: string; password: string }) => {
    const errors: { username?: string; password?: string } = {};
    if (values.username !== initialUsername) {
      errors.username = "Invalid username";
    }
    if (values.password !== initialPassword) {
      errors.password = "Invalid password";
    }
    return errors;
  };

  const handleSubmit = (values: { username: string; password: string }) => {
    if (
      values.username === initialUsername &&
      values.password === initialPassword
    ) {
      history.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
