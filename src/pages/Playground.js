import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  getPostsApiCallAction,
  incrementCounter,
  incrementCounterAsync,
} from "../store/asyncslice";

function Playground() {
  let dispatch = useDispatch();
  let { asyncStore } = useSelector((state) => state);

  return (
    <div>
      <PlaygrounApi />
      <hr />

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

function PlaygrounApi() {
  let dispatch = useDispatch();
  let { asyncStore } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPostsApiCallAction());
  }, []);

  return (
    <div>
      <h1>API DEMO</h1>

      {asyncStore.postList.map((item) => (
        <div key={item.id} className="alert alert-primary">
          {item.id} {item.body}
        </div>
      ))}
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
