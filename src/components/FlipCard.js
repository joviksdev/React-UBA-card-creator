import React, { useContext } from 'react';
import cardContext from '../context/cardContext';

const FlipCard = () => {
  const {
    flipCard,
    reverseFlip,
    state: { rotate, preview }
  } = useContext(cardContext);
  return (
    preview &&
    (rotate ? (
      <button style={style} onClick={reverseFlip} className='btn preview'>
        Flip Card
      </button>
    ) : (
      <button style={style} onClick={flipCard} className='btn preview'>
        Flip Card
      </button>
    ))
  );
};

const style = {
  position: 'absolute',
  bottom: '10%',
  zIndex: '10',
  left: '50%',
  transform: 'translateX(-50%)'
};

export default FlipCard;
