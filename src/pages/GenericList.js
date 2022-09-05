import { useDispatch, useSelector } from "react-redux";
import { deleteGenericItem } from "../store/genericslice";

function GenericList() {
  let dispatch = useDispatch();
  let { genericStore } = useSelector((state) => state);

  return (
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
                  <input className="btn btn-link" type="button" value="View" />{" "}
                  /
                  <input className="btn btn-link" type="button" value="Edit" />
                  /
                  <input
                    className="btn btn-link"
                    type="button"
                    value="Del"
                    onClick={() => dispatch(deleteGenericItem({ item, index }))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GenericList;
