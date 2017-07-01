
const CHANGE_SELECTED_SEARCH = 'mainSearch/CHANGE_SELECTED_SEARCH';

const initialState = {
  selectedSet: 'set_set',
};

// TODO: Add search suggestions
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_SELECTED_SEARCH:
      return {
        ...state,
        selectedSet: action.newSet
      };
    default:
      return state;
  }
}

export function changeSelectedSearch(newSet) {
  return {
    type: CHANGE_SELECTED_SEARCH,
    newSet
  };
}
