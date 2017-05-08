export default (state = {}, { type, cardType, name }) => {
  switch (type) {
    case 'ADD_CARD':
    return [
        ...state,
        {
          cardType,
          name
        }
      ];
    default:
      return state;
  }
};
