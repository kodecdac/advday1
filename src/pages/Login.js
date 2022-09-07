import { useDispatch } from "react-redux";
import { loginApiAction } from "../store/authslice";

function Login() {
  let dispatch = useDispatch();

  const processLoginAction = () => {
    dispatch(loginApiAction());
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
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control form-control-lg mb-2"
        />

        <input
          type="button"
          value="LOGIN"
          className="btn btn-lg btn-primary w-100"
          onClick={processLoginAction}
        />
      </div>
    </div>
  );
}

export default Login;
