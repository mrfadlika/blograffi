import { useState } from "preact/hooks";
import "./Auth.styled.css";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const allowedAccount = [
    { username: "admin", password: "admin" },
    { username: "user1", password: "user123" },
    { username: "user2", password: "passworduser123" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const account = allowedAccount.find(
      (acc) => acc.username === username && acc.password === password
    );
    if (account) {
      setError("");
      console.log("Login success");
      const previousPage = new URLSearchParams(window.location.search).get(
        "redirect"
      );
      onLogin(username, previousPage);
    } else {
      setError("Username atau Password salah");
    }
  };

  return (
    <div className="div-utama">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onInput={(e) => setUsername(e.target.value)}
          className="input-type"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
          className="input-type"
        />
        <button type="submit" className="button-login"></button>
      </form>
    </div>
  );
};

export default LoginForm;