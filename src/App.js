function App() {
  let mytheme = "bg-secondary text-light p-3";
  let darktheme = false;
  return (
    <div>
      <h1
        className={
          darktheme ? "bg-dark text-light p-2" : "bg-primary text-light p-2"
        }
      >
        Interpolation CSS
      </h1>

      <hr />
      <h1 className={mytheme}>Interpolation CSS</h1>

      <hr />
      <h1 className="bg-secondary text-light p-3">Hello World</h1>
    </div>
  );
}

export default App;
