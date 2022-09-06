import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, incrementCounterAsync } from "../store/asyncslice";

function Playground() {
  let dispatch = useDispatch();
  let { asyncStore } = useSelector((state) => state);

  return (
    <div>
      <h1>Main Playground</h1>
      <h1>Counter {asyncStore?.counter}</h1>
      <input
        type="button"
        value="Incrment Sync"
        onClick={() => dispatch(incrementCounter())}
      />

      <hr />
      <PlaygroundA />
    </div>
  );
}

function PlaygroundA() {
  let dispatch = useDispatch();
  let { asyncStore } = useSelector((state) => state);
  return (
    <div>
      <h1>Playground A</h1>
      <h1>Counter {asyncStore.counter}</h1>

      <input
        type="button"
        value="Incment Async"
        onClick={() => dispatch(incrementCounterAsync())}
      />
    </div>
  );
}

export default Playground;
