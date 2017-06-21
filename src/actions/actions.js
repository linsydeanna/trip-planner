export const addUser = (email, username, password, confirmPassword) => {
  return {
    type: 'ADD_USER',
    email,
    username,
    password,
    confirmPassword
  }
};

export const logUserIn = (username, id, email, token) => {
  return {
    type: 'LOG_USER_IN',
    username,
    id,
    email,
    token
  };
};

export const addCard = (cardType, name) => {
  return {
    type: 'ADD_CARD',
    cardType,
    name
  }
};
