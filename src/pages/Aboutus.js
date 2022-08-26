import { useState } from "react";

function AboutUs() {
  let [user, setUser] = useState({
    username: "",
    password: "",
    desc: "",
    price: 0,
    gender: "",
  });

  const handleChange = (e) => {
    let { name, value, type } = e.target;

    switch (type) {
      case "number":
        setUser({ ...user, [name]: Number(value) });
        break;
      default:
        setUser({ ...user, [name]: value });
        break;
    }
  };

  return (
    <div>
      <form>
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
        <input
          type="radio"
          className="form-check-input"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={user.gender === "male"}
        />{" "}
        Male
        <input
          type="radio"
          className="form-check-input"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={user.gender === "female"}
        />{" "}
        FeMale
        <input type="button" value="Sumit" className="w-100" />
      </form>
    </div>
  );
}

export default AboutUs;
