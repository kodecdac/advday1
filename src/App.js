import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <div>
      <div
        className="bg-primary text-light text-nowrap text-dark text-truncate"
        style={{ width: "100px" }}
      >
        Lorem ipsum dolor sit amet.
      </div>

      <Row>
        <Col md={3} className="d-none d-md-block bg-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          eligendi consequuntur eaque vel ipsa deleniti asperiores ipsum,
          delectus consequatur sapiente veniam voluptatum facilis suscipit
          natus, provident maiores, possimus assumenda voluptas.
        </Col>
        <Col sm={12} md={6} className="bg-success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          cupiditate magnam aut pariatur assumenda alias, optio repellendus,
          neque expedita dolorem fuga similique. Officia possimus tenetur
          voluptas veritatis a aperiam fugit? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. At reiciendis repudiandae, laboriosam
          hic voluptatum libero. Beatae, quas! Est veritatis, magnam sint culpa
          praesentium iure natus, consequuntur accusamus nam corrupti
          repellendus!
        </Col>
        <Col md={3} className="d-none d-md-block bg-danger">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum
          sint aliquid deserunt minus minima excepturi cupiditate sit iste
          suscipit cumque, labore dolores recusandae voluptatem sequi delectus
          pariatur similique inventore.
        </Col>
      </Row>

      {/** RESPONSIVE IN BOOTSTRAP */}
      <div className="row">
        <div className="d-none d-md-block col-md-3 bg-primary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
          dignissimos ut. Quam in perferendis omnis excepturi, quod quibusdam.
          Totam non aperiam vero repudiandae quia optio ipsam at dolor minima
          illo?
        </div>
        <div className="col-sm-12 col-md-6 bg-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          expedita eligendi, quis nulla eveniet vel error, nostrum maiores
          molestiae debitis quos nemo sit temporibus quae ipsa, cumque itaque?
          Doloribus, vero!
        </div>
        <div className="d-none d-md-block col-md-3 bg-info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit amet
          dolore corrupti delectus modi saepe maiores corporis libero veniam,
          repudiandae et repellendus doloribus impedit excepturi id commodi at
          obcaecati harum.
        </div>
      </div>
    </div>
  );
}

export default App;
