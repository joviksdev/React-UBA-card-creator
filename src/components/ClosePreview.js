import React, { useContext } from 'react';
import cardContext from '../context/cardContext';

const ClosePreview = () => {
  const { state, closePreview } = useContext(cardContext);
  return (
    state.preview && (
      <div className='close' onClick={closePreview}>
        +
      </div>
    )
  );
};

export default ClosePreview;
