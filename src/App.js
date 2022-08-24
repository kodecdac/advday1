// Basic Interpolation
function App() {
  let username = "cdac kharghar";
  let price = 99.99;
  let active = true;

  let ref = { id: 1, username: "rahul" };
  let list = ["delhi", "calcutta"];
  let list1 = [{ id: 1, username: "rohit" }];

  // Arrow Function :: Equivalent Lamda Function
  let sum = () => {
    console.log("I am sum function");
  };

  return (
    <div>
      <h1>Interplation Demo</h1>
      <h1> {username} </h1>
      <h1>{price}</h1>
      <h1>{active}</h1>

      <h1>{ref.username}</h1>
      <h1>{list}</h1>
      <h1>{JSON.stringify(list1)}</h1>

      <h1>{sum()}</h1>
    </div>
  );
}

// REVISE LIST / FUNCTION

export default App;
