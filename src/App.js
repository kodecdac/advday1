import { useState } from "react";

function App() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Learn React Testing</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Username"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Enter Password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <input
        type="button"
        value="Submit"
        disabled={!user.username || !user.password}
      />
    </div>
  );
}

export default App;
