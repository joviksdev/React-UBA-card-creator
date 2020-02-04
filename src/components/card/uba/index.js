import React, { useContext } from 'react';
import UbaFrontCard from './UbaFrontCard';
import UbaBackCard from './UbaBackCard';
import cardContext from '../../../context/cardContext';

const Card = () => {
  const {
    state: { preview }
  } = useContext(cardContext);

  const setPreview = () => ({
    position: preview ? 'absolute' : 'initial',
    top: preview ? '35%' : 'initial',
    left: preview ? '50%' : 'initial',
    transform: preview ? 'translate(-50%, -50%)' : 'translate(0, 0)',
    zIndex: preview ? '20' : 'initial'
  });

  return (
    <div className='card-container' style={setPreview()}>
      <div style={{ position: 'relative' }}>
        <UbaFrontCard />
        <UbaBackCard />
      </div>
    </div>
  );
};

export default Card;
