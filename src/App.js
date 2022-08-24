// Basic Interpolation
function App() {
  let list = ["delhi", "calcutta", "mumbai", "kharghar"];
  let list1 = [
    { id: 1, username: "rohit", active: true },
    { id: 2, username: "rahul", active: true },
    { id: 3, username: "virat", active: false },
  ];

  return (
    <div>
      <h1>Working with List</h1>

      <ul>
        {list1
          .filter((item) => !item.active)
          .map((item, index) => (
            <li key={index}>
              {item.id} and {item.username}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
