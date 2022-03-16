import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import ReactStars from "react-stars/dist/react-stars";


const ModalStars = ({movie}) => {
  const [show, setShow] = useState(false);
  const [sum, setSum] = useState([0]);

  const ratingChanged = (newRating) => {
    setSum(newRating);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Rating {sum}/5
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'}
          />
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
    </>
  );
};

export default ModalStars;