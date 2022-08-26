import { useState } from "react";

function AboutUs() {
  let [user, setUser] = useState({
    username: "",
    password: "",
    desc: "",
    price: 0,
  });

  const handleChange = (e) => {
    let value1 = e.target.value;

    setUser({ ...user, [e.target.name]: value1 });
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="Enter name"
        value={user.username}
        onChange={handleChange}
      />

      <input
        type="password"
        className="form-control"
        name="password"
        placeholder="Enter password"
        value={user.password}
        onChange={handleChange}
      />

      <textarea
        className="form-control"
        name="desc"
        placeholder="Enter desc"
        value={user.desc}
        onChange={handleChange}
      />

      <input
        type="number"
        className="form-control"
        name="price"
        placeholder="Enter Price"
        value={user.price}
        onChange={handleChange}
      />

      <input type="button" value="Sumit" />
    </div>
  );
}

export default AboutUs;
