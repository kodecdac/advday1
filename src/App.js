import { useRef } from "react";

// Basic Interpolation
function App() {
  let inputRef = useRef();

  // useRef hook based. :: REACT BASED
  let captureName1 = () => {
    console.log(inputRef.current.value);
  };

  // DOM BASED
  let captureName = () => {
    console.log(document.getElementById("id1"));
    let name = document.getElementById("id1").value;
    console.log(name);
  };

  return (
    <div>
      <h1>Form 1</h1>
      <input type="text" ref={inputRef} />
      <input type="button" value="Using Ref" onClick={captureName1} />

      <h1>Form 0</h1>
      <input type="text" id="id1" />
      <input type="button" value="Enter Your Name" onClick={captureName} />
    </div>
  );
}

export default App;
