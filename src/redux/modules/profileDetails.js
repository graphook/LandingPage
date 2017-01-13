import {clone} from 'lodash';

const FETCH = 'profileDetails/FETCH';
const FETCH_SUCCESS = 'profileDetails/FETCH_SUCCESS';
const FETCH_FAIL = 'profileDetails/FETCH_FAIL';
const FETCH_USER_SETS = 'profileDetails/FETCH_USER_SETS';
const FETCH_USER_SETS_SUCCESS = 'profileDetails/FETCH_USER_SETS_SUCCESS';
const FETCH_USER_SETS_FAIL = 'profileDetails/FETCH_USER_SETS_FAIL';
const STAR = 'profileDetails/STAR';
const STAR_SUCCESS = 'profileDetails/STAR_SUCCESS';
const STAR_FAIL = 'profileDetails/STAR_FAIL';
const UNSTAR = 'profileDetails/UNSTAR';
const UNSTAR_SUCCESS = 'profileDetails/UNSTAR_SUCCESS';
const UNSTAR_FAIL = 'profileDetails/UNSTAR_FAIL';

const initialState = {
  loading: false,
  loadingUserSets: false,
  error: '',
  userSetsError: '',
  sets: [],
  stars: []
};

export default function reducer(state = initialState, action = {}) {
  let newStars;
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stars: action.result.stars
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case FETCH_USER_SETS:
      return {
        ...state,
        loadingUserSets: true,
        userSetsError: ''
      };
    case FETCH_USER_SETS_SUCCESS:
      return {
        ...state,
        loadingUserSets: false,
        userSetsError: '',
        sets: action.result.map((set) => { return set._id; })
      };
    case FETCH_USER_SETS_FAIL:
      return {
        ...state,
        loadingUserSets: false,
        userSetsError: action.error
      };
    case STAR_SUCCESS:
      newStars = clone(state.stars);
      newStars.push(action.id);
      return {
        ...state,
        stars: newStars
      };
    case UNSTAR_SUCCESS:
      newStars = clone(state.stars);
      newStars.splice(state.stars.indexOf(action.id), 1);
      return {
        ...state,
        stars: newStars
      };
    default:
      return state;
  }
}

export function fetchUser() {
  return {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    promise: (client) => client.get('/v1/user')
  };
}
export function fetchUserSets(username) {
  return {
    types: [FETCH_USER_SETS, FETCH_USER_SETS_SUCCESS, FETCH_USER_SETS_FAIL],
    promise: (client) => client.post('/v1/set/search', {
      data: {
        creatorName: username
      }
    })
  };
}
export function star(setId) {
  return {
    types: [STAR, STAR_SUCCESS, STAR_FAIL],
    promise: (client) => client.put('/v1/set/' + setId + '/star'),
    id: setId
  };
}
export function unstar(setId) {
  return {
    types: [UNSTAR, UNSTAR_SUCCESS, UNSTAR_FAIL],
    promise: (client) => client.put('/v1/set/' + setId + '/unstar'),
    id: setId
  };
}
