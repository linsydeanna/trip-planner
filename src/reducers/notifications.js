export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_NOTIFICATION':
      const { key, severity, message } = action;
      return state.slice(0,).concat({ key, severity, message });

    case 'REMOVE_NOTIFICATION':
      return state.filter(entry => entry.key !== action.key);

    default:
      return state;
  }
};
