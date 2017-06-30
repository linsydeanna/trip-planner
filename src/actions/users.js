export const logUserIn = ({ username, email, token }) => {
  let currentData = localStorage.getItem('cgData') || '{}';
  currentData = JSON.parse(currentData);
  currentData.username = username;
  currentData.email = email;
  currentData.token = token;
  localStorage.setItem('cgData', JSON.stringify(currentData));
  return {
    type: 'LOG_USER_IN',
    username,
    email,
    token
  };
};

export const logUserOut = () => {
  localStorage.removeItem('cgData');
  return {
    type: 'LOG_USER_OUT'
  };
}
