const cardReducer = (state, action) => {
  switch (action.type) {
    case 'SET_UPDATE':
      return {
        ...state,
        detail: action.payload
      };
    case 'PREVIEW_CARD':
      return {
        ...state,
        preview: true
      };
    case 'CLOSE_PREVIEW':
      return {
        ...state,
        preview: false
      };
    case 'FLIP_CARD':
      return {
        ...state,
        rotate: true
      };
    case 'REVERSE_CARD':
      return {
        ...state,
        rotate: false
      };
    case 'DROP_LIST':
      return {
        ...state,
        selectCard: true
      };
    case 'CLOSE_LIST':
      return {
        ...state,
        selectCard: false
      };
    case 'SET_CARD':
      return {
        ...state,
        card: action.payload
      };

    default:
      return state;
  }
};

export default cardReducer;
