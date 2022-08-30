import { useState } from "react";

function Playground() {
  let [username, setUsername] = useState("rajiv");
  let [user, setUser] = useState({ id: 1, email: "adf@asdf.com" });
  let [list, setList] = useState([]);

  return (
    <div>
      <HelloUser />
      <HelloUser username="rohit" user={{}} list={[]} />
      <HelloUser username={username} user={user} list={list} />
    </div>
  );
}

// TO ACCEPT PARAMETER ::
function HelloUser(props) {
  return (
    <div>
      <h1>Hello, {props.username}!</h1>
      <p>{JSON.stringify(props)}</p>
    </div>
  );
}

export default Playground;
