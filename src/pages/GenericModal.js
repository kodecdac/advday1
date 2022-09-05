import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { hideModalAction } from "../store/genericslice";

function GenericModal() {
  let dispatch = useDispatch();
  let { genericStore } = useSelector((state) => state);

  return (
    <>
      <Modal
        size="lg"
        centered={true}
        show={genericStore.displayModal}
        onHide={() => dispatch(hideModalAction())}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>{genericStore.displayModalItem?.username}</h1>
          <h1>{"********"}</h1>
          <h1>{genericStore.displayModalItem?.email}</h1>
          <h1>{genericStore.displayModalItem?.mobile}</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => dispatch(hideModalAction())}
          >
            Close
          </Button>
          <Button variant="primary" onClick={() => dispatch(hideModalAction())}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GenericModal;
