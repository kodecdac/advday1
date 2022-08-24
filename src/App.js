// Basic Interpolation
function App() {
  let list = ["delhi", "calcutta", "mumbai", "kharghar"];
  // ["<h1>delhi</h1>", "<h1>calcutta</h1>", ]
  return (
    <div>
      <h1>Working with List</h1>

      <ul>
        {list.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>

      {list.map((item, index) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
