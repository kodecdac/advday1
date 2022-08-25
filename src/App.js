import { Accordion, Alert, Button, Container, Navbar } from "react-bootstrap";

function App() {
  let list = [1, 1, 1, 1, 1];
  return (
    <div>
      <Navbar bg="success" expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>

      <Accordion>
        {list.map((item, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>Accordion Item #{index}</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Button variant="danger">React Bootstrap Button</Button>
      <input
        type="button"
        value="Bootstrap Button"
        className="btn btn-danger"
      />

      <hr />
      <Alert variant="danger">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </Alert>

      <div className="alert alert-danger">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </div>

      <hr />
      <Alert>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Alert>
      <div className="alert alert-primary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </div>
    </div>
  );
}

export default App;
