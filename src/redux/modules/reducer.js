import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import auth from './auth';
import {reducer as form} from 'redux-form';
import modal from './modal';
import set from './set';
import setSearchReducer from './setSearch';
import type from './type';
import typeSearch from './typeSearch'

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  form,
  modal,
  set,
  setSearch: setSearchReducer,
  type,
  typeSearch
});
