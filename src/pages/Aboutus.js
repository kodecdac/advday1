import { useState } from "react";

function AboutUs() {
  let [user, setUser] = useState({
    username: "",
    password: "",
    desc: "",
    price: 0,
    gender: "",
    agree: false,
    fruit: "",
  });

  const handleChange = (e) => {
    let { name, value, type } = e.target;

    switch (type) {
      case "number":
        setUser({ ...user, [name]: Number(value) });
        break;
      case "checkbox":
        setUser({ ...user, [name]: e.target.checked });
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
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            name="agree"
            checked={user.agree}
            onChange={handleChange}
          />{" "}
          I Agree
        </div>
        <select name="fruit" value={user.fruit} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">
            Coconut
          </option>
          <option value="mango">Mango</option>
        </select>
        <input type="button" value="Sumit" className="w-100" />
      </form>
    </div>
  );
}

export default AboutUs;
