// Basic Interpolation
function App() {
  let username = "cdac kharghar";
  let id = "id2";

  let sayHello = (e) => {
    console.log(e);
  };

  let helloAgain = (p1, p2) => {
    console.log(p1, p2);
  };

  return (
    <div>
      <h1>Interplation Demo</h1>
      <h1 id={id}>{username}</h1>

      <input type="button" value="Purchase Item" onClick={sayHello} />
      <input type="button" value="working with param" onClick={helloAgain} />
      <input
        type="button"
        value="working with param demo"
        onClick={() => helloAgain("delhi", "calcutta")}
      />
    </div>
  );
}

export default App;
