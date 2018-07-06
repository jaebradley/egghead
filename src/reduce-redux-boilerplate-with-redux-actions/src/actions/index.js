import {
  createActions,
} from 'redux-actions';

import {
  ADD_TODO,
  REMOVE_TODO,
  FIX_TODO_NAME,
} from './types';

// Hacky input validation function that is used to
// upper-case first todo name character and lower-case all subsequent characters
const fixName = value => value
  .split('')
  .reduce((acc, letter, index) => index === 0 ? letter.toUpperCase() : `${acc}${letter.toLowerCase()}`, '');

// createActions returns an object with camelCased action creators
// FIX_TODO_NAME takes a payload modification method
// All other action creators take a payload and then return that payload so it's an identify function
// createActions just takes function parameters for action creators that have an unchanged payload
export const {
  addTodo,
  removeTodo,
  fixTodoName,
} = createActions(
  {
    FIX_TODO_NAME: fixName,
  },
  ADD_TODO,
  REMOVE_TODO,
);;

/**
 * HOW TO CREATE ACTION CREATORS FROM createAction

import {
  createAction,
} from 'redux-actions';

import {
  ADD_TODO,
  REMOVE_TODO,
  FIX_TODO_NAME,
} from './types';

const fixName = value => value
  .split('')
  .reduce((acc, letter, index) => index === 0 ? letter.toUpperCase() : `${acc}${letter.toLowerCase()}`, '');

// Redux way of creating action creators
const addTodo = todo => ({ type: ADD_TODO, payload: todo });
const removeTodo = id => ({ type: REMOVE_TODO, payload: id });

const addTodo = createAction(ADD_TODO);
const removeTodo = createAction(REMOVE_TODO);

Note function is payload creator function
const fixTodoName = createAction(FIX_TODO_NAME, fixName);

export {
  addTodo,
  removeTodo,
  fixTodoName,
};

*/
