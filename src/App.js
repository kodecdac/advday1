// Basic Interpolation
function App() {
  let list = ["delhi", "calcutta", "mumbai", "kharghar"];
  let list1 = [
    { id: 1, username: "rohit" },
    { id: 2, username: "rahul" },
  ];

  return (
    <div>
      <h1>Working with List</h1>

      <ul>
        {list1.map((item, index) => (
          <li key={index}>
            {item.id} and {item.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
