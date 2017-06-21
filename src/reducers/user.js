export default (state = {}, { type, data }) => {
  switch (type) {
    case 'LOG_USER_IN':
      return {
        ...state,
        username: data.username,
        id: data.id,
        email: data.email,
        isAuthenticated: true,
        loggedInAt: new Date()
      };
    case 'LOG_USER_OUT':
      return {
        ...state,
        username: null,
        id: null,
        email: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
