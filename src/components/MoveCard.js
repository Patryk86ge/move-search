import React from 'react';
import ModalStars from "../helpers/modalStars";
import ModalMove from "../helpers/modalMove";
import imgDefault from '../asets/no-image.jpg'

const MoveCard = ({movie}) => {
  console.log(movie);
  return (
    <>
      <div className={"box__move"}>
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
        <h1>{movie.title}</h1>
        <p>{movie.Type}</p>
        <p style={{marginBottom:"50px"}}>{movie.description}</p>
        <div className={"modalBox"}>
          <ModalStars movie={movie}/>
          <ModalMove movie={movie}/>
        </div>
      </div>
    </>
  );
};

export default MoveCard;