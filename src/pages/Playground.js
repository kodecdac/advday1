import { useState } from "react";

function Playground() {
  return (
    <div>
      <Playground7 />
    </div>
  );
}

function Playground7() {
  let [editOperation, setEditOperation] = useState(false);
  let [editIndex, setEditIndex] = useState();

  let [displayToastMessage, setDisplayToastMesage] = useState(false);

  let [userList, setUserList] = useState([]);

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  let handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleInsert = () => {
    let list1 = [user, ...userList]; // cloning.
    setUserList(list1);
    setUser({
      username: "",
      password: "",
      email: "",
      mobile: "",
    });

    setDisplayToastMesage(true);
    setTimeout(() => setDisplayToastMesage(false), 2000);
  };

  const handleEdit = (item, index) => {
    console.log("Handle Edit", item);

    setEditOperation(true);
    setEditIndex(index);
    setUser(item);
  };

  const resetOperation = () => {
    setEditOperation(false);
    setEditIndex();
    setUser({
      username: "",
      password: "",
      email: "",
      mobile: "",
    });
    setDisplayToastMesage(false);
  };

  const handleUpdate = () => {
    // user has the latest value
    console.log(user);

    // Perform the update operation on List
    let listItem = userList[editIndex];
    listItem.username = user.username;
    listItem.password = user.password;
    listItem.email = user.email;
    listItem.mobile = user.mobile;

    // Update the UI
    setUserList([...userList]);

    // After Update
    setEditOperation(false);
    setEditIndex();
    setUser({
      username: "",
      password: "",
      email: "",
      mobile: "",
    });

    setDisplayToastMesage(true);
    setTimeout(() => setDisplayToastMesage(false), 2000);
  };

  const handleDelete = (item, index) => {
    console.log("Handle Delete", item);

    let list1 = userList.filter((item, itemIndex) => {
      return index !== itemIndex;
    });

    setUserList([...list1]);
  };

  return (
    <div>
      <h1>Basic Form </h1>

      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Enter username"
          name="username"
          value={user.username}
          onChange={handleInput}
        />
        <input
          className="form-control"
          type="password"
          placeholder="Enter password"
          name="password"
          value={user.password}
          onChange={handleInput}
        />
        <input
          className="form-control"
          type="email"
          placeholder="Enter Email"
          name="email"
          value={user.email}
          onChange={handleInput}
        />
        <input
          className="form-control"
          type="mobile"
          placeholder="Enter Mobile"
          name="mobile"
          value={user.mobile}
          onChange={handleInput}
        />

        {editOperation ? (
          <>
            <input
              className="btn btn-primary"
              type="button"
              value="Update"
              onClick={handleUpdate}
            />
            <input
              className="btn btn-secondary"
              type="button"
              value="Cancel"
              onClick={resetOperation}
            />
          </>
        ) : (
          <>
            <input
              className="btn btn-primary"
              type="button"
              value="Submit"
              onClick={handleInsert}
            />
            <input
              className="btn btn-secondary"
              type="button"
              value="Reset"
              onClick={resetOperation}
            />
          </>
        )}
      </div>

      {/** THIS COPONSENT CONDITIONAL */}
      {displayToastMessage && (
        <div className="alert alert-success">User Operation Success!</div>
      )}

      <div>
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
            {userList.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.username}</td>
                <td>******</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>
                  <input className="btn btn-link" type="button" value="View" />{" "}
                  /
                  <input
                    className="btn btn-link"
                    type="button"
                    value="Edit"
                    onClick={() => handleEdit(item, index)}
                  />
                  /
                  <input
                    className="btn btn-link"
                    type="button"
                    value="Del"
                    onClick={() => handleDelete(item, index)}
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

export default Playground;
