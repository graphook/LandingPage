import clone from 'utils/clone';
const FETCH = 'set/FETCH';
const FETCH_SUCCESS = 'set/FETCH_SUCCESS';
const FETCH_FAIL = 'set/FETCH_FAIL';
const FETCH_MULT = 'set/FETCH_MULT';
const FETCH_MULT_SUCCESS = 'set/FETCH_MULT_SUCCESS';
const FETCH_MULT_FAIL = 'set/FETCH_MULT_FAIL';
const SEARCH = 'set/SEARCH';
const SEARCH_SUCCESS = 'set/SEARCH_SUCCESS';
const SEARCH_FAIL = 'set/SEARCH_FAIL';

const initialState = {
  hash: {}
};

const addSets = (state, sets) => {
  // clone
  const newState = clone(state);
  sets.forEach((set) => {
    newState.hash[set._id] = set;
  });
  console.log(newState);
  return newState;
};

export default function reducer(state = initialState, action = {}) {
  if (action.result && action.result.sets) {
    const setInfo = action.result.sets;
    return addSets(state, (setInfo.read || []).concat(setInfo.created || [])
      .concat(setInfo.updated || []).concat(setInfo.deleted || []));
  }
  return state;
}

export function fetchSet(setId) {
  return {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    promise: (client) => client.get('/v1/type/' + setId),
    id: setId
  };
}
export function fetchSets(setIds, numberPerPage, pageNumber) {
  return {
    types: [FETCH_MULT, FETCH_MULT_SUCCESS, FETCH_MULT_FAIL],
    promise: (client) => client.post('/v1/set/search', {
      data: {
        _id: {
          $in: setIds
        }
      },
      params: {
        count: numberPerPage,
        page: pageNumber
      }
    }),
    numberPerPage: numberPerPage,
    page: pageNumber
  };
}
export function searchSets(query) {
  return {
    types: [SEARCH, SEARCH_SUCCESS, SEARCH_FAIL],
    promise: (client) => client.post('/v1/set/search', {
      data: query
    })
  };
}
