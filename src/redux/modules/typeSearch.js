const SEARCH = 'typeSearch/SEARCH';
const SEARCH_SUCCESS = 'typeSearch/SEARCH_SUCCESS';
const SEARCH_FAIL = 'typeSearch/SEARCH_FAIL';
const UPDATE_SEARCH_TEXT = 'typeSearch/UPDATE_SEARCH_TEXT';

const NUM_PER_PAGE = 20;
const initialState = {
  loaded: false,
  page: 0,
  searchText: '',
  curSearch: '',
  results: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        results: (action.query !== state.curSearch) ? [] : state.results,
        loading: true
      };
    case SEARCH_SUCCESS:
      const results = action.result.types.read.map((result) => {
        return result._id;
      });
      return {
        ...state,
        loading: false,
        loaded: true,
        results: (action.pageNumber !== 0) ? state.results.concat(results) : results,
        curSearch: action.query,
        searchText: action.query,
        page: action.page
      };
    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.text
      };
    default:
      return state;
  }
}

export function searchTypes(searchQuery, pageNumber) {
  return {
    types: [SEARCH, SEARCH_SUCCESS, SEARCH_FAIL],
    promise: (client) => client.get('/v1/type', {
      params: {
        q: searchQuery,
        page: pageNumber || 0,
        count: NUM_PER_PAGE
      },
    }),
    query: searchQuery,
    page: pageNumber || 0
  };
}

export function updateSearchText(newText) {
  return {
    type: UPDATE_SEARCH_TEXT,
    text: newText
  };
}
