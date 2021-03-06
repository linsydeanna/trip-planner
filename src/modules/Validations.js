import { isEmpty } from './Helpers';

export function required(value) {
  if (isEmpty(value)) {
    return 'Required';
  }
}

export function email(value) {
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
}

export function shortest(min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`;
    }
  };
}

export function longest(max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`;
    }
  };
}

export function match(field) {
  return (value, data) => {
    if (data && value !== data[field]) {
      return 'Does not match';
    }
  }
}
