import React, { useContext } from 'react';
import cardContext from '../context/cardContext';
const Preview = () => {
  const { previewCard } = useContext(cardContext);
  return (
    <div style={style} className='container'>
      <button onClick={previewCard} className='btn preview'>
        Preview
      </button>
    </div>
  );
};

const style = {
  padding: '1rem',
  maxWidth: '600px',
  width: '95%',
  margin: '0.5rem auto'
};

export default Preview;
