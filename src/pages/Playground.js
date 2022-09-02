import { useSelector } from "react-redux";

function Playground() {
  let globalState = useSelector((globalState) => globalState);

  return (
    <div>
      <h1>{globalState.firstStore?.message}</h1>

      <hr />
      <PlaygroundB />
      <hr />
      <PlaygroundA />
      <hr />
      <p>{JSON.stringify(globalState)}</p>
    </div>
  );
}

function PlaygroundA() {
  let state = useSelector((state) => state);

  return (
    <>
      <h1>Hello A</h1>
      <h1>{state.firstStore?.message}</h1>
      <h1>{state.secondStore?.counter}</h1>
    </>
  );
}

function PlaygroundB() {
  let { firstStore } = useSelector((state) => state);
  let { secondStore } = useSelector((state) => state);

  return (
    <>
      <h1>Hello B</h1>
      <h1>{firstStore?.message}</h1>
      <h1>{secondStore?.counter}</h1>
    </>
  );
}

export default Playground;
