import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { incrementAsync } from "../store/store";

import Nav from "react-bootstrap/Nav";

function Main() {
  return (
    <>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link as={Link} to="maina">
            MainA
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="mainb">
            MainB
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Outlet />
    </>
  );
}

export function MainA() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const goToProjectPage = () => {
    // logical operations :: dynamic
    navigate("/project");
  };

  return (
    <div>
      <h1>
        Main {state.counter?.value} / {state.likeCounter?.lvalue}
      </h1>
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

      <Link to="/project">Project Page Using Link Tag</Link>

      <input
        className="btn btn-outline-secondary"
        type="button"
        value="Project Explorer"
        onClick={goToProjectPage}
      />

      <input
        type="button"
        value="Async Incrment"
        onClick={() => dispatch(incrementAsync())}
      />
    </div>
  );
}

export function MainB() {
  return (
    <div>
      <h1>Main B</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quidem
        doloremque necessitatibus officiis a voluptatibus qui unde numquam, ea,
        quisquam laborum repellendus illo illum corrupti nobis optio minus
        dignissimos rem! Repellat error commodi suscipit sequi totam corrupti
        iusto? Repellendus tempore, mollitia excepturi nam ipsum assumenda
        tenetur qui reiciendis provident vitae ut optio quia hic corrupti
        explicabo alias ipsam aut, ullam nesciunt sunt incidunt architecto
        eligendi. Sapiente reprehenderit accusamus tempora alias dignissimos at
        vel cumque velit magnam. Itaque, quibusdam neque! Aperiam illum unde,
        dolores quos ullam veritatis molestias doloribus quidem recusandae
        cupiditate ex mollitia ut commodi, nisi optio veniam cum minus harum
        quibusdam, nam totam. Fuga, voluptates error dolore impedit
        reprehenderit totam pariatur quod nisi doloribus porro consequuntur amet
        aliquam, quidem iste iure labore. Dicta itaque voluptatibus omnis quas
        rerum quasi qui est eveniet? Minima, sint harum aliquam, id doloremque
        cumque, soluta officia nesciunt laudantium doloribus recusandae nemo.
        Doloremque, aspernatur! Unde placeat rerum enim pariatur fuga tempora
        eos modi natus! Labore maiores culpa quia rerum nulla nesciunt iusto
        expedita alias nam odit beatae velit, optio officia quis corrupti. Velit
        ad, eveniet nisi quos voluptatibus eos voluptas quasi impedit cumque
        odit deserunt! A obcaecati placeat voluptatibus, dolor sed debitis
        impedit at fugit.
      </p>
    </div>
  );
}

export default Main;
