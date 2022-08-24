// Basic Interpolation
function App() {
  let username = "cdac kharghar";
  let id = "id2";

  return (
    <div>
      <h1>Interplation Demo</h1>
      <h1> {username} </h1>

      <h1 id="id1">{username}</h1>

      {/* ATTRIBUTE LEVEL */}
      <h1 id={id}>{username}</h1>
    </div>
  );
}

export default App;
