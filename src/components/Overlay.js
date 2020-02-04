import React, { useContext } from 'react';
import cardContext from '../context/cardContext';

const Overlay = () => {
  const { state } = useContext(cardContext);
  return state.preview && <div className='over-lay'></div>;
};

export default Overlay;
