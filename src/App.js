import "./App.css";

// CSS using JS ?
// <h1 style="color:red">
function App() {
  let theme = "orange";

  return (
    <div>
      <h1 className="beautify">CLASS BASED STYLING</h1>

      <hr />
      <h1 style={{ color: theme }}>Hello Universe</h1>
      <h1 style={{ color: "red" }}>Hello World</h1>
    </div>
  );
}

export default App;
