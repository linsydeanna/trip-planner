//rename file

export default (state = {}, { type, email, username, password, confirmPassword }) => {
  switch (type) {
    case 'ADD_USER':
    return {
      ...state,
      email,
      username,
      password,
      confirmPassword
    }
    default:
      return state;
  }
};
