import React, { useContext } from 'react';
import cardContext from '../context/cardContext';

const SelectCard = () => {
  const {
    state: { selectCard, card },
    dropList,
    closeList,
    visaCard,
    masterCard
  } = useContext(cardContext);

  const setStyle = () => ({
    transform: selectCard ? 'scaleY(1)' : 'scaleY(0)'
  });

  return (
    <div className='container select-card'>
      {selectCard ? (
        <button className='select-card-btn btn' onClick={closeList}>
          Selected Card <span style={{ fontSize: '0.6rem' }}>&#9654;</span>{' '}
          {card === 'visa' ? (
            <strong>Visa Card</strong>
          ) : (
            <strong>Master Card</strong>
          )}
        </button>
      ) : (
        <button className='select-card-btn btn' onClick={dropList}>
          <strong>Select Card</strong>
        </button>
      )}
      <div className='option'>
        <button style={setStyle()} className='btn' onClick={visaCard}>
          Visa Card
        </button>
        <button style={setStyle()} className='btn' onClick={masterCard}>
          Master Card
        </button>
      </div>
    </div>
  );
};

export default SelectCard;
