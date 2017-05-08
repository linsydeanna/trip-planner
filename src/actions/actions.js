export const addCard = (cardType, name) => {
  return {
    type: 'ADD_CARD',
    cardType,
    name
  }
};
