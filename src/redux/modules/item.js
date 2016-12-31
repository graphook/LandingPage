import clone from 'utils/clone';

const initialState = {
  hash: {}
};

const addItems = (state, items) => {
  // clone
  const newState = clone(state);
  items.forEach((item) => {
    newState.hash[item._id] = item;
  });
  return newState;
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'setDetails/FETCH_ITEMS_SUCCESS':
      return addItems(state, action.result);
    default:
      return state;
  }
}
