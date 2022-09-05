import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGenericItem } from "../store/genericslice";

function GenericRegisterForm() {
  let dispatch = useDispatch();

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  let handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  let addGenericUser = () => {
    // VALIDATIONS
    // REDUX DISPATCH
    dispatch(addGenericItem(user));

    setUser({
      username: "",
      password: "",
      email: "",
      mobile: "",
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-sm-12 my-2">
        <input
          type="text"
          className="form-control form-control-lg mb-1"
          placeholder="Enter Username"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />

        <input
          type="password"
          className="form-control form-control-lg mb-1"
          placeholder="Enter Password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="form-control form-control-lg mb-1"
          placeholder="Enter Email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="form-control form-control-lg mb-1"
          placeholder="Enter Mobile"
          name="mobile"
          value={user.mobile}
          onChange={handleInputChange}
        />

        <input
          type="button"
          value="Add User"
          onClick={addGenericUser}
          className="btn btn-lg btn-secondary w-100"
        />
      </div>
    </div>
  );
}

export default GenericRegisterForm;
