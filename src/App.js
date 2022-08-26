import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

function Main() {
  return (
    <div>
      <h1>Main</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis debitis
        ea dignissimos optio reiciendis? Asperiores impedit qui architecto
        possimus, voluptatum quaerat vitae dicta error ex, natus harum corrupti
        id ut dignissimos nam nihil repellendus doloribus libero accusamus
        nulla, autem deleniti rerum. Enim quibusdam soluta ex ea rem quisquam
        labore, ipsam exercitationem saepe magni nobis perspiciatis suscipit
        tempore molestiae numquam sapiente dolor optio hic quasi porro ad nihil
        nostrum et. Sequi accusamus deserunt hic blanditiis quod fugiat dolorum
        nesciunt, itaque, harum id nobis architecto quo porro libero voluptatum,
        ex sint quibusdam veniam exercitationem eligendi consequatur eum
        repellendus ad! Debitis, ad perferendis.
      </p>
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam vero
        incidunt eveniet nemo ratione quibusdam fugiat, voluptas error labore ad
        blanditiis, voluptates explicabo deleniti. Tenetur voluptatum nemo iste
        aliquid, magnam fuga eveniet ipsa eaque commodi quidem dolores
        consequuntur blanditiis perspiciatis voluptates corrupti illo eligendi
        est animi repellat totam facere. Eveniet tempore illum beatae quidem
        dolorem eligendi autem fugit nesciunt iste iure numquam itaque suscipit
        id nostrum tenetur magni facilis impedit, molestiae laboriosam fugiat
        unde labore neque esse vel! Adipisci sequi ea officia porro minima
        numquam aliquid ullam eum aut! A, neque? Illo aliquid officia magni,
        laudantium dolorum ad error ipsam.
      </p>
    </div>
  );
}

function Project() {
  return (
    <div>
      <h1>Project Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, temporibus?
        Fuga ipsa veniam distinctio neque sapiente eos vitae reprehenderit sequi
        dolorem velit eveniet excepturi possimus ex, quasi numquam nostrum,
        laborum ducimus porro quae ab maxime cum nobis culpa quam? Aut, suscipit
        distinctio ducimus, quidem reprehenderit laboriosam magni delectus sunt
        molestias vero totam nihil pariatur. At totam sit praesentium eos
        reiciendis odit sed temporibus maxime optio iusto amet magnam veritatis,
        quis dolorem voluptatem aliquid vero dolorum iure quisquam dolor quos ex
        repellendus nulla. Deleniti omnis consectetur tempora quas incidunt,
        voluptates sapiente totam sequi architecto ut corrupti veniam, quidem
        quasi odit fugit!
      </p>
    </div>
  );
}

export default App;
