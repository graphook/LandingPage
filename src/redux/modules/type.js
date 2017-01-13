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
  if (action.result && action.result.types) {
    const typeInfo = action.result.types;
    return addTypes(state, (typeInfo.read || []).concat(typeInfo.created || [])
      .concat(typeInfo.updated || []).concat(typeInfo.deleted || []));
  }
  return state;
}

export function fetchType(typeId) {
  return {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    promise: (client) => client.get('/v1/type/' + typeId),
    id: typeId
  };
}
