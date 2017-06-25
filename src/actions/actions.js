import store from '../store/store';

export const addUser = (email, username, password, confirmPassword) => {
  return {
    type: 'ADD_USER',
    email,
    username,
    password,
    confirmPassword
  }
};

export const logUserIn = ({ username, id, email, token }) => {
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

export const removeNotification = ({key}) => {
  return {
    type: 'REMOVE_NOTIFICATION',
    key
  };
};

export const addNotification = ({ key, severity, message, ttl = 7500 }) => {
  let uniqueKey = `${key}-${Date.now()}`;
  setTimeout(() => {
    store.dispatch(removeNotification({ key: uniqueKey }));
  }, ttl);
  return {
    type: 'ADD_NOTIFICATION',
    key: uniqueKey,
    severity,
    message,
    ttl
  };
};
