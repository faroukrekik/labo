import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CancelAppoint = ({ el }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        Cancel
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          Are you sure you want to cancel the appointement !
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            YES
          </Button>
          <Button variant="success" onClick={handleClose}>
            NO
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CancelAppoint;
