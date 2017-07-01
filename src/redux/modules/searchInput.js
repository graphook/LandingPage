
const UPDATE_SEARCH_TEXT = 'setSearch/UPDATE_SEARCH_TEXT';

const initialState = {
  searchText: '',
  userHasMadeAnInteraction: false
};

// TODO: Add search suggestions
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.text,
        userHasMadeAnInteraction: true
      };
    default:
      return state;
  }
}

export function updateSearchText(newText, name) {
  return {
    type: UPDATE_SEARCH_TEXT,
    text: newText,
    name
  };
}
