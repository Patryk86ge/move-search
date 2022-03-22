import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import imgDefault from "../asets/no-image.jpg";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";


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
          View
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
                src={IMAGE_PATH + movie.poster_path}
                alt={'postar'}
                onError={(e) => {
                  if (e.target.src !== `${IMAGE_PATH + movie.poster_path}`) {
                    e.target.src = `${imgDefault}`;
                  }
                }
                }
              />
            </div>
            <div className="modalMove__viev">
              <h1 style={{color:"black"}}>{movie.title}</h1>
              <p>{movie.Type}</p>
              <p>{movie.release_date}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalMove;