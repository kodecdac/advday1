import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrmentCounter } from "../store/store";

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

  return (
    <>
      <h1>Hello A</h1>
      <h1>{state.firstStore?.message}</h1>
      <h1>{state.secondStore?.counter}</h1>
      <input
        type="button"
        value="Incrment"
        onClick={() => dispatch(incrmentCounter())}
      />
    </>
  );
}

function PlaygroundB() {
  let dispatch = useDispatch();
  let { firstStore } = useSelector((state) => state);
  let { secondStore } = useSelector((state) => state);

  return (
    <>
      <h1>Hello B</h1>
      <h1>{firstStore?.message}</h1>
      <h1>{secondStore?.counter}</h1>
      <input
        type="button"
        value="Incrment"
        onClick={() => dispatch(incrmentCounter)}
      />
    </>
  );
}

export default Playground;
