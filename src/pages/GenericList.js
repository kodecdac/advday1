import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {
  deleteGenericItem,
  deleteUserApiAction,
  displayModalAction,
  ediUserRefAction,
  makeUserListApiAction,
} from "../store/genericslice";
import GenericModal from "./GenericModal";

function GenericList() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(makeUserListApiAction());
  }, []);

  let { genericStore } = useSelector((state) => state);

  const editGenericItem = (item, index) => {
    dispatch(ediUserRefAction({ item, index }));

    navigate("/generic?edit=1");
  };

  // PROTECTION START THE COMPONENT
  let { authStore } = useSelector((state) => state);
  if (!authStore.loginStatus) {
    return <Navigate to="/login" replace={true} />;
  }
  // PROTECTION ENDS THE COMPONENT

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">UserName</th>
                <th scope="col">Password</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Actoins</th>
              </tr>
            </thead>
            <tbody>
              {genericStore.genericList.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.username}</td>
                  <td>******</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>
                    <input
                      className="btn btn-link"
                      type="button"
                      value="View"
                      onClick={() => dispatch(displayModalAction(item))}
                    />{" "}
                    /
                    <input
                      className="btn btn-link"
                      type="button"
                      value="Edit"
                      onClick={() => editGenericItem(item, index)}
                    />
                    /
                    <input
                      className="btn btn-link"
                      type="button"
                      value="Del"
                      onClick={() => dispatch(deleteUserApiAction(item, index))}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <GenericModal />
    </>
  );
}

export default GenericList;
