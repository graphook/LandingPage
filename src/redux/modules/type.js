import clone from 'utils/clone';

const initialState = {
  hash: {}
};

const addSets = (state, sets) => {
  // clone
  const newState = clone(state);
  sets.forEach((set) => {
    newState.hash[set._id] = set;
  });
  return newState;
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'typeSearch/SEARCH_SUCCESS':
      return addSets(state, action.result);
    default:
      return state;
  }
}
