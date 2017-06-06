import { isEmpty } from './Helpers';

export function required(value) {
  if (isEmpty(value)) {
    return 'Required';
  }
}
