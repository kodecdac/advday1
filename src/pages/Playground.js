import { useState } from "react";

function Playground() {
  return (
    <div>
      <Playground3 />
      <Playground2 />
      <Playground1 />
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
