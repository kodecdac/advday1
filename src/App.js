// ONE COMPONENT :: CONS => SHARING THE DATA
// TAG :: XML ELMENT
// <App />
function App() {
  return (
    <div>
      <Header />
      <AppBody />
      <Footer />
    </div>
  );
}

// MEMBER 1
// COMPONENT :: Header
// <Header /> :: XML TAG :: CUSTOM TAG
function Header() {
  return (
    <div>
      <h1 className="bg-primary text-light p-2 m-0">Header Block</h1>
    </div>
  );
}

// MEMBER 2
function Footer() {
  return (
    <div>
      <h1 className="bg-secondary text-light p-3">Footer Block</h1>
      <p className="alert alsert-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque eos
        voluptates veritatis aspernatur illum sit repellendus modi, fugiat
        libero ullam, rem reprehenderit perferendis. Recusandae blanditiis
        delectus consequuntur neque fuga.
      </p>
    </div>
  );
}

// MEMBER 3
function AppBody() {
  return (
    <div className="my-1">
      <div className="alert alert-dark mb-0">Main Body</div>
      <p className="alert alert-secondary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam neque
        eveniet cum voluptatum maiores suscipit at expedita, et ab odit cumque?
        Harum corporis possimus repellendus nisi iusto voluptas et, inventore
        optio enim! Nisi pariatur optio accusamus modi quia et fugit voluptatem
        sunt hic dignissimos nihil ut necessitatibus autem aperiam, earum
        accusantium quod quidem veritatis voluptatibus architecto molestias
        voluptates eos vero ipsam. Numquam maiores quam pariatur odit ullam
        itaque labore praesentium, consequuntur magnam, minima enim maxime a
        quia. Ipsam, odio! Quasi magnam dolore iusto itaque voluptate!
        Voluptatem animi tempora odio laboriosam ad accusamus, eum harum eos
        blanditiis corrupti, aspernatur eius. Aliquid atque harum cum saepe.
        Nulla harum voluptas, dolorum optio debitis fugit mollitia, explicabo
        vero quidem quam sunt itaque praesentium ad deleniti est porro, nemo
        tenetur rerum officiis. Suscipit, voluptatem error ullam sint molestias
        hic tenetur, nihil incidunt in rerum perferendis sunt qui ducimus ad
        quam voluptate deserunt voluptatum dolores assumenda dolorem consectetur
        aliquam vero! Unde voluptate saepe ut dicta impedit voluptas eos tempore
        sunt harum. Quia, quod. Hic, dolorum! Provident veniam porro aliquid
        asperiores esse possimus quas officia atque nostrum, velit quam ullam
        repudiandae! Rem aperiam dolore corrupti eius ea, neque sit ratione
        consectetur consequatur repellat sapiente veniam, voluptatem ipsam?
      </p>
    </div>
  );
}

export default App;
