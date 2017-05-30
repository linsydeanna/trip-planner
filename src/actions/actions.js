export const addUser = (email, username, password, confirmPassword) => {
  return {
    type: 'ADD_USER',
    email,
    username,
    password,
    confirmPassword
  }
};

export const addCard = (cardType, name) => {
  return {
    type: 'ADD_CARD',
    cardType,
    name
  }
};
