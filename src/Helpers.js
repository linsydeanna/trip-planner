/**
 * Remove unwanted properties, usually because they're non-DOM-standard or
 * redundant.
 * @param {Object} dirtyProps - React properties or any object.
 * @param {string[]} propsToClean - List of case-sensitive keys to filter out.
 * @return {Object}
 */
export const sanitizeProps = (dirtyProps, propsToClean = []) => {
  let sanitizedProps = {};
  for (var key in dirtyProps) {
    if (propsToClean.indexOf(key) === -1) {
      sanitizedProps[key] = dirtyProps[key];
    }
  }
  return sanitizedProps;
};

/**
 * Checks whether or not a string is empty, null, or undefined.
 * @param {String}
 */
export const isEmpty = (value = '') => {
  return !value.trim();
};
