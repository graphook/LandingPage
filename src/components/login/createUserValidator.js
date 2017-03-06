import memoize from 'lru-memoize';
import {createValidator, required, email, match, alphaNumeric} from 'utils/validation';

const createUserValidator = createValidator({
  username: [required, alphaNumeric],
  email: [required, email],
  password1: [required, alphaNumeric],
  password2: [required, match('password1')]
});
export default memoize(10)(createUserValidator);
