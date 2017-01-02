import clone from 'utils/clone';
const FETCH = 'type/FETCH';
const FETCH_SUCCESS = 'type/FETCH_SUCCESS';
const FETCH_FAIL = 'type/FETCH_FAIL';

const initialState = {
  hash: {}
};

const addTypes = (state, types) => {
  // clone
  const newState = clone(state);
  types.forEach((type) => {
    newState.hash[type._id] = type;
  });
  return newState;
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'typeSearch/SEARCH_SUCCESS':
      return addTypes(state, action.result);
    case 'typeDetails/FETCH_SUCCESS':
      return addTypes(state, [ action.result ]);
    case FETCH:
      return state;
    case FETCH_SUCCESS:
      return addTypes(state, [ action.result ]);
    case FETCH_FAIL:
      const newState = clone(state);
      newState.hash[action.id] = newState.hash[action.id] || action.error;
      return newState;
    default:
      return state;
  }
}

export function fetchType(typeId) {
  return {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    promise: (client) => client.get('/v1/type/' + typeId),
    id: typeId
  };
}
