import {
  call,
  put,
} from 'redux-saga/effects';
import fetch from 'node-fetch';

import {
  FETCH_STAR_WARS_REQUEST,
  FETCH_STAR_WARS_SUCCESS,
} from '../types';

const api = (url) => fetch(url).then(response => response.json());

export const fetchStarWarsRequest = () => ({
  type: FETCH_STAR_WARS_REQUEST,
});

export function* fetchPerson(action) {
  try {
    // first parameter to call is a function
    // rest of the parameters are spread into the first parameter function
    // call returns the result of the function
    const person = yield call(api, 'https://swapi.co/api/people');

    // put is like dispatch
    // yield suspends execution
    yield put({
      type: FETCH_STAR_WARS_SUCCESS,
      data: person.results,
    });
  } catch (e) {
    console.log(e);
    // could also use put effect to dispatch error message
  }
}
