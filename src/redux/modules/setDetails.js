const FETCH = 'setDetails/FETCH';
const FETCH_SUCCESS = 'setDetails/FETCH_SUCCESS';
const FETCH_FAIL = 'setDetails/FETCH_FAIL';
const FETCH_ITEMS = 'setDetails/FETCH_ITEMS';
const FETCH_ITEMS_SUCCESS = 'setDetails/FETCH_ITEMS_SUCCESS';
const FETCH_ITEMS_FAIL = 'setDetails/FETCH_ITEMS_FAIL';

const NUM_PER_PAGE = 20;
const initialState = {
  loading: false,
  page: 0,
  id: '',
  allItemsLoaded: false,
  setError: '',
  itemError: {},
  numPerPage: NUM_PER_PAGE,
  items: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        loading: true,
        id: action.id,
        setError: '',
        items: []
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case FETCH_ITEMS:
      return {
        ...state,
        itemError: {},
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        page: action.page,
        allItemsLoaded: action.result.items.read.length < NUM_PER_PAGE,
        items: state.items.concat(action.result.items.read.map(item => item._id))
      };
    case FETCH_ITEMS_FAIL:
      return {
        ...state,
        itemError: action.error
      };
    default:
      return state;
  }
}

export function fetchSet(setId) {
  return {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    promise: (client) => client.get('/v1/set/' + setId),
    id: setId
  };
}

export function fetchItems(setId, setItems, pageNumber) {
  return {
    types: [FETCH_ITEMS, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAIL],
    promise: (client) => client.get('/v1/set/' + setId + '/item', {
      params: {
        count: NUM_PER_PAGE,
        page: pageNumber
      }
    }),
    setId,
    page: pageNumber
  };
}
