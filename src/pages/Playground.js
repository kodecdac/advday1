import { useState } from "react";

function Playground() {
  return (
    <div>
      <Playground7 />
      <Playground6 />
      <Playground5 />
      <Playground4 />
      <Playground3 />
      <Playground2 />
      <Playground1 />
    </div>
  );
}

function Playground7() {
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

  const handleSumit = () => {
    let list1 = [user, ...userList]; // cloning.
    setUserList(list1);
    setUser({
      username: "",
      password: "",
      email: "",
      mobile: "",
    });
  };

  const handleEdit = (item, index) => {
    console.log("Handle Edit", item);
    setUser(item);
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
      <h1>Playground 7 / EDIT OPERATIONS </h1>

      <div>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          value={user.username}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={user.password}
          onChange={handleInput}
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={user.email}
          onChange={handleInput}
        />
        <input
          type="mobile"
          placeholder="Enter Mobile"
          name="mobile"
          value={user.mobile}
          onChange={handleInput}
        />
        <input type="button" value="Submit" onClick={handleSumit} />
      </div>

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

        {/** LIST FORM */}
        <ul>
          {userList.map((item) => (
            <li>
              {item.username} / {"****"} / {item.email} / {item.mobile}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Playground6() {
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

  const handleSumit = () => {
    let list1 = [user, ...userList]; // cloning.
    setUserList(list1);
    setUser({
      username: "",
      password: "",
      email: "",
      mobile: "",
    });
  };

  return (
    <div>
      <h1>Playground 6 / with multiple Inputs / with Minimum Variables</h1>

      <div>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          value={user.username}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={user.password}
          onChange={handleInput}
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={user.email}
          onChange={handleInput}
        />
        <input
          type="mobile"
          placeholder="Enter Mobile"
          name="mobile"
          value={user.mobile}
          onChange={handleInput}
        />
        <input type="button" value="Submit" onClick={handleSumit} />
      </div>

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
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.username}</td>
                <td>******</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>
                  <input className="btn btn-link" type="button" value="View" />{" "}
                  /
                  <input className="btn btn-link" type="button" value="Edit" />
                  /<input className="btn btn-link" type="button" value="Del" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/** LIST FORM */}
        <ul>
          {userList.map((item) => (
            <li>
              {item.username} / {"****"} / {item.email} / {item.mobile}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Playground5() {
  let [userList, setUserList] = useState([]);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");

  let handleUsername = (e) => setUsername(e.target.value);
  let handlePassword = (e) => setPassword(e.target.value);
  let handleEmail = (e) => setEmail(e.target.value);
  let handleMobile = (e) => setMobile(e.target.value);

  const handleSumit = () => {
    console.log(username, password, email, mobile);
    const userRef = { username, password, email, mobile };
    let list1 = [userRef, ...userList]; // cloning.
    setUserList(list1);

    setUsername("");
    setPassword("");
    setEmail("");
    setMobile("");
  };

  return (
    <div>
      <h1>Playground 5 / with multiple Inputs</h1>

      <div>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleUsername}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePassword}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmail}
        />
        <input
          type="mobile"
          placeholder="Enter Mobile"
          value={mobile}
          onChange={handleMobile}
        />
        <input type="button" value="Submit" onClick={handleSumit} />
      </div>

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
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.username}</td>
                <td>******</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>
                  <input className="btn btn-link" type="button" value="View" />{" "}
                  /
                  <input className="btn btn-link" type="button" value="Edit" />
                  /<input className="btn btn-link" type="button" value="Del" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/** LIST FORM */}
        <ul>
          {userList.map((item) => (
            <li>
              {item.username} / {"****"} / {item.email} / {item.mobile}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Playground4() {
  let [list, setList] = useState([]);
  let [message, setMessage] = useState("");

  const handleMessage = (e) => {
    console.log(e.target.value);
    setMessage(e.target.value);
  };

  const addIntoList = () => {
    let list1 = [message, ...list];
    setList(list1);
    setMessage("");
  };

  return (
    <div>
      <h1>Play Ground 4</h1>
      <input
        type="text"
        placeholder="Enter Message...."
        value={message}
        onChange={handleMessage}
      />
      <input type="button" value="Add One More Item" onClick={addIntoList} />
      <ul>
        {list.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Playground3() {
  // let list = Array.from({ length: 2 }, () => "Delhi");
  let [list, setList] = useState([1, 1]);

  const addIntoList = () => {
    let list1 = [...list, "Delhi"];
    setList(list1);
  };

  return (
    <div>
      <h1>Play Ground 3</h1>
      <input type="button" value="Add One More Item" onClick={addIntoList} />
      <ul>
        {list.map((item, index) => (
          <li>Delhi</li>
        ))}
      </ul>
    </div>
  );
}

function Playground2() {
  // let title = "Hello";
  let [title, setTitle] = useState("Hello");

  // let counter = 10;
  let [counter, setCounter] = useState(10);

  // let active = true;
  let [active, setActive] = useState(true);

  // let list = [];
  let [list, setList] = useState([]);

  // let user = { id: 1, name: "raj" };
  let [user, setUser] = useState({ id: 1, name: "raj" });

  return <div>Play2</div>;
}

function Playground1() {
  let [counter, setCounter] = useState(10);

  const incrment = () => {
    counter++;

    // REPAINT THE PAGE/DOM
    setCounter(counter);
  };

  return (
    <div>
      Hello Playground
      <h1>{counter}</h1>
      <input type="button" value="Incrment" onClick={incrment} />
    </div>
  );
}

export default Playground;
