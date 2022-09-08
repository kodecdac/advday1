import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { ErrorBoundary } from "react-error-boundary";
import { useSelector } from "react-redux";

// MEMBER 3
function AppBody() {
  let [user] = useState({});

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div
            className="d-flex justify-content-center align-items-center h4"
            style={{ height: "350px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            ipsum tempore laborum ut veritatis non molestiae magni nihil
            voluptas nostrum consequuntur earum obcaecati sunt ex, vero amet
            illum libero laboriosam.
          </div>
        </div>
      </div>

      <div className="row m-4">
        {[1, 1, 1, 1, 1, 1, 1, 11, 1].map((item, index) => (
          <div className="col-4">
            <Card key={index}>
              <Card.Img
                variant="top"
                src={`http://picsum.photos/${200 + index}`}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates nesciunt, officiis necessitatibus commodi error
                  fugit, animi laudantium alias illo doloribus ipsum placeat
                  deleniti, iste nam! Sequi minima repellendus quae ex?
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default AppBody;
