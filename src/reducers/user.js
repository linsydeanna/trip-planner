export default (state = {}, action) => {
  switch (action.type) {

    case 'LOG_USER_IN':
      const { username, id, email } = action;
      return {
        ...state,
        username,
        id,
        email,
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
