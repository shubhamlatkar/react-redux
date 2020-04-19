import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import TrainerForm from "./TrainerForm";

const TrainerModal = props => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    props.history.push("/signup");
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TrainerForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default TrainerModal;
