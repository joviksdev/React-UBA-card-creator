import React, { useReducer } from 'react';
import Context from './cardContext';
import cardReducer from './cardReducer';

const CardState = props => {
  const initialState = {
    detail: {},
    card: '',
    rotate: false,
    preview: false,
    selectCard: false
  };

  // Initiate state

  const [state, dispatch] = useReducer(cardReducer, initialState);

  // Update User Detail

  const setUpdate = update => {
    dispatch({
      type: 'SET_UPDATE',
      payload: update
    });
  };

  // Rotate Card
  const flipCard = () => {
    dispatch({
      type: 'FLIP_CARD'
    });
  };

  const reverseFlip = () => {
    dispatch({
      type: 'REVERSE_CARD'
    });
  };

  // Set Preview

  const previewCard = () => {
    dispatch({
      type: 'PREVIEW_CARD'
    });
  };

  // Close Preview

  const closePreview = () => {
    dispatch({
      type: 'CLOSE_PREVIEW'
    });
  };

  //Select Card

  const dropList = () => {
    dispatch({
      type: 'DROP_LIST'
    });
  };

  const closeList = () => {
    dispatch({
      type: 'CLOSE_LIST'
    });
  };

  const visaCard = () => {
    dispatch({
      type: 'SET_CARD',
      payload: 'visa'
    });
  };

  const masterCard = () => {
    dispatch({
      type: 'SET_CARD',
      payload: 'master'
    });
  };

  return (
    <Context.Provider
      value={{
        state,
        setUpdate,
        flipCard,
        reverseFlip,
        previewCard,
        closePreview,
        dropList,
        closeList,
        visaCard,
        masterCard
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default CardState;
