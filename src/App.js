// Working with Conditional Rendering
function App() {
  let active = true;

  return (
    <div>
      <div>
        <h1>Complex Object</h1>
        <div>
          {active && (
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio quis id iusto ex optio! Nam consequatur illum, aut
              placeat reprehenderit animi ipsa cupiditate sint porro
              repudiandae, veritatis dolorum quis sunt. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Magni beatae ullam, inventore
              quo ex non ab, molestiae delectus amet quia eaque culpa cumque
              omnis eveniet doloremque fugiat perspiciatis aspernatur ratione!
            </h3>
          )}
        </div>
      </div>

      <hr />
      <div>
        <h1>ONLY CONDTIONAL RENDRING</h1>
        <div> {active && <h2>OFFER ONLY 4 YOU!</h2>} </div>
      </div>

      <hr />

      <h1>EITHER OR RENDERING</h1>
      <div>{active ? <h2>User is Active</h2> : <h2>Uesr is Inactive</h2>}</div>
    </div>
  );
}

export default App;
