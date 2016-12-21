import memoize from 'lru-memoize';
import {createValidator, required, email, match} from 'utils/validation';

const createUserValidator = createValidator({
  username: [required],
  email: [required, email],
  password1: [required],
  password2: [required, match('password1')]
});
export default memoize(10)(createUserValidator);
