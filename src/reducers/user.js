export default (state = {}, action) => {
  switch (action.type) {

    case 'LOG_USER_IN':
      const { username, token, email } = action;
      return {
        ...state,
        username,
        token,
        email,
        isAuthenticated: true,
        loggedInAt: new Date()
      };

    case 'LOG_USER_OUT':
      return {
        ...state,
        username: '',
        token: '',
        email: '',
        isAuthenticated: false,
        loggedInAt: null
      };

    default:
      return state;
  }
};
