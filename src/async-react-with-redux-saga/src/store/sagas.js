import {
  takeLatest,
} from 'redux-saga/effects';

import {
  FETCH_STAR_WARS_REQUEST,
} from '../types';

import {
  fetchPerson,
} from '../actions';

function* mySaga() {
  // takeLatest takes the action creator type that will dispatch fetchPerson
  // takeLatest listens to the store for the specified action type and then will run the associated generator function
  // if instance of generator function already running, it will cancel it and run another one
  yield takeLatest(FETCH_STAR_WARS_REQUEST, fetchPerson);
};

export default mySaga;
