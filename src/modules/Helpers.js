/**
 * Checks whether or not a string is empty, null, or undefined.
 * @param {String}
 */
export const isEmpty = (value = '') => {
  return !value.trim();
};
