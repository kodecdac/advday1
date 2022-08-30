import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Playground() {
  return (
    <div>
      <Playground1 />
      <Playground2 />
    </div>
  );
}

function Playground1() {
  return (
    <div>
      <h1>P1 </h1>
    </div>
  );
}

function Playground2() {
  return (
    <div>
      <h1>P2 </h1>
    </div>
  );
}

export default Playground;
