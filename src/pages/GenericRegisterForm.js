import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addGenericItem, updateGenericItem } from "../store/genericslice";

function GenericRegisterForm() {
  let dispatch = useDispatch();

  let [searchParams] = useSearchParams();
  let isEditOperation = searchParams.get("edit");

  let { genericStore } = useSelector((state) => state);

  let [user, setUser] = useState({
    username: isEditOperation ? genericStore.editUserRef?.username : "",
    password: isEditOperation ? genericStore.editUserRef?.password : "",
    email: isEditOperation ? genericStore.editUserRef?.email : "",
    mobile: isEditOperation ? genericStore.editUserRef?.mobile : "",
  });

  let handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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

  let updateGenericUser = () => {
    dispatch(updateGenericItem(user));

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

        {isEditOperation ? (
          <input
            type="button"
            value="Update User"
            onClick={updateGenericUser}
            className="btn btn-lg btn-secondary w-100"
          />
        ) : (
          <input
            type="button"
            value="Add User"
            onClick={addGenericUser}
            className="btn btn-lg btn-secondary w-100"
          />
        )}

        {genericStore.displayToast && (
          <div className="alert alert-success mt-2">
            User Added Successfully
          </div>
        )}
      </div>
    </div>
  );
}

export default GenericRegisterForm;
