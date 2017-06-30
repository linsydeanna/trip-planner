import store from '../store';

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
