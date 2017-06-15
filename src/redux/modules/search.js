const SEARCH = 'setSearch/SEARCH';
const SEARCH_SUCCESS = 'setSearch/SEARCH_SUCCESS';
const SEARCH_FAIL = 'setSearch/SEARCH_FAIL';
const UPDATE_SEARCH_TEXT = 'setSearch/UPDATE_SEARCH_TEXT';

const NUM_PER_PAGE = 20;
const initialState = {
  loaded: false,
  page: 0,
  searchText: '',
  curSearch: '',
  results: [],
  allResultsLoaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        results: (action.query !== state.curSearch) ? [] : state.results,
        loading: true,
        error: undefined
      };
    case SEARCH_SUCCESS:
      const results = action.result.sets.read.map((result) => {
        return result._id;
      });
      return {
        ...state,
        loading: false,
        loaded: true,
        results: (action.page !== 0) ? state.results.concat(results) : results,
        curSearch: action.query,
        searchText: action.query,
        page: action.page,
        allResultsLoaded: action.result.sets.read.length < NUM_PER_PAGE
      };
    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        curSearch: action.query,
        searchText: action.query,
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

export function searchSets(searchQuery, pageNumber) {
  console.log(searchQuery);
  return {
    types: [SEARCH, SEARCH_SUCCESS, SEARCH_FAIL],
    promise: (client) => client.post('/v2/search', {
      params: {
        q: searchQuery || undefined,
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
