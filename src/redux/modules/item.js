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
  if (action.result && action.result.items) {
    const itemInfo = action.result.items;
    return addItems(state, (itemInfo.read || []).concat(itemInfo.created || [])
      .concat(itemInfo.updated || []).concat(itemInfo.deleted || []));
  }
  return state;
}
