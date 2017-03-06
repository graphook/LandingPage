import memoize from 'lru-memoize';
import {createValidator, required} from 'utils/validation';

const createUserValidator = createValidator({
  username: [required],
  password: [required]
});
export default memoize(10)(createUserValidator);
