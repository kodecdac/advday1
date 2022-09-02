import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemIntoList,
  addItemIntoListWithPayload,
  incrmentCounter,
  incrmentCounterByPayload,
} from "../store/store";

function Playground() {
  let dispatch = useDispatch();
  let { firstStore, secondStore } = useSelector((globalState) => globalState);

  return (
    <div>
      <h1>{firstStore?.message}</h1>
      <h1>{secondStore?.counter}</h1>
      <input
        type="button"
        value="Incrment"
        onClick={() => dispatch(incrmentCounter())}
      />

      <hr />
      <PlaygroundB />
      <hr />
      <PlaygroundA />
      <hr />
    </div>
  );
}

function PlaygroundA() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  let { secondStore } = useSelector((state) => state);

  let [message, setMessage] = useState("");
  let handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <h1>Hello A</h1>
      <h1>{state.firstStore?.message}</h1>
      <h1>{state.secondStore?.counter}</h1>
      <input
        type="button"
        value="Incrment"
        onClick={() => dispatch(incrmentCounterByPayload(10))}
      />

      {/** WORKIGN WITH STORE LIST */}
      <h1>List</h1>
      <input
        type="text"
        placeholder="Enter Text"
        value={message}
        onChange={handleInputChange}
      />
      <input
        type="button"
        value="Add item To List with Payload"
        onClick={() => dispatch(addItemIntoListWithPayload(message))}
      />

      <input
        type="button"
        value="Add item To List"
        onClick={() => dispatch(addItemIntoList())}
      />
      <ul>
        {secondStore?.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function PlaygroundB() {
  let dispatch = useDispatch();
  let { firstStore } = useSelector((state) => state);
  let { secondStore } = useSelector((state) => state);

  // Component State
  let [userCountInput, setUserInput] = useState(1);
  let handleInputChange = (e) => {
    setUserInput(Number(e.target.value));
  };

  return (
    <>
      <h1>Hello B</h1>
      <h1>{firstStore?.message}</h1>
      <h1>{secondStore?.counter}</h1>
      <input
        type="number"
        placeholder="Enter Count"
        value={userCountInput}
        onChange={handleInputChange}
      />
      <input
        type="button"
        value="Incrment"
        onClick={() => dispatch(incrmentCounterByPayload(userCountInput))}
      />

      {/** WORKIGN WITH STORE LIST */}
      <h1>List</h1>
      <ul>
        {secondStore?.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Playground;
