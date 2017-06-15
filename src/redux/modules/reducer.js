import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import auth from './auth';
import {reducer as form} from 'redux-form';
import modal from './modal';
import set from './set';
import type from './type';
import setDetails from './setDetails';
import item from './item';
import typeDetails from './typeDetails';
import profileDetails from './profileDetails';
import search from './search';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  form,
  modal,
  search,
  set,
  type,
  setDetails,
  item,
  typeDetails,
  profileDetails
});
