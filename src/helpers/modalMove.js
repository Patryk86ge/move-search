import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import imgDefault from "../asets/no-image.jpg";

const ModalMove = ({movie}) => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 btn__move" onClick={() => handleShow(v)}>
          view
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={"modalMove__box"}>
            <div className="modalMove__img">
              <img
                src={movie.image}
                alt={'postar'}
                onError={(e) => {
                  if (e.target.src !== `${movie.image}`) {
                    e.target.src = `${imgDefault}`;
                  }
                }
                }
              />
            </div>
            <div className="modalMove__viev">
              {/*<p>Type: {movie.Type}</p>*/}
              <p>Description: {movie.description}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalMove;