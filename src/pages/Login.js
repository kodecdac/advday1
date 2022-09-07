import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginApiAction } from "../store/authslice";

function Login() {
  let dispatch = useDispatch();
  let { authStore } = useSelector((state) => state);

  let [user, setUser] = useState({ username: "", password: "" });
  let handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const processLoginAction = () => {
    dispatch(loginApiAction(user));
  };

  return (
    <div
      className="row justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div className="col-12 col-md-6">
        <div className="alert alert-secondary">ABCD APPLICATION</div>
        <input
          type="text"
          placeholder="Enter Username"
          className="form-control form-control-lg"
          name="username"
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control form-control-lg mb-2"
          name="password"
          onChange={handleInputChange}
        />

        <input
          type="button"
          value="LOGIN"
          className="btn btn-lg btn-primary w-100"
          onClick={processLoginAction}
        />

        {authStore?.loginError && (
          <div className="alert alert-danger mt-2">Invalid Credetnials</div>
        )}
      </div>
    </div>
  );
}

export default Login;
