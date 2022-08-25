import { useRef } from "react";
import { Col, Row } from "react-bootstrap";

// Basic Interpolation
function App() {
  return (
    <div>
      <Row>
        <Col md={3} className="bg-primary d-none d-md-block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptatum, excepturi, molestias sed iusto provident asperiores
          architecto eos magnam corporis possimus vero obcaecati soluta beatae
          blanditiis non modi voluptas pariatur.
        </Col>
        <Col sm={12} md={6} className="bg-danger">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
          temporibus doloremque. Vel mollitia unde iste reprehenderit, facere
          provident voluptates voluptas quas eligendi perferendis minus id
          nesciunt quos optio, delectus nulla.
        </Col>
        <Col md={3} className="bg-warning d-none d-md-block">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          minus nemo quo recusandae mollitia. Architecto mollitia illum maiores
          fugiat deleniti dolore itaque adipisci, eaque consequatur error quidem
          pariatur delectus minus!
        </Col>
      </Row>

      <div className="row">
        <div className="d-none d-md-block col-md-2 bg-primary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum
          deserunt iusto eveniet minima quo quasi impedit at dicta id. Provident
          mollitia earum explicabo ipsum quasi? Optio provident quidem
          aspernatur!
        </div>
        <div className="col-md-8 bg-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum
          fugit
        </div>
        <div className="d-none d-md-block col-md-2 bg-success">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, et
          suscipit. A voluptatem architecto nam ea quasi, voluptatibus iste
          velit, esse repudiandae voluptas perferendis, harum consectetur earum
          maxime facilis assumenda.
        </div>
      </div>
    </div>
  );
}

export default App;
