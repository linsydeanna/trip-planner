export default (state = {}, something) => {
  switch (something.type) {
    // case 'ADD_USER':
    //   return {
    //     ...state,
    //     email,
    //     username,
    //     password,
    //     confirmPassword
    //   };
    case 'LOG_USER_IN':
      console.log ('LOG_USER_IN', state, something);
      return state;
      // return {
      //   ...state,
      //   username,
      //   id: userId,
      //   email
      // };
    default:
      return state;
  }
};
