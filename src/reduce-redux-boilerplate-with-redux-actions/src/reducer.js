import {
  handleActions,
} from 'redux-actions';

import {
  ADD_TODO,
  REMOVE_TODO,
  FIX_TODO_NAME,
} from './actions/types';

const initialState = {
    todos: [],
    currentTodo: '',
};

let id = 0;

// handleActions takes a map of the actionTypes to their respective reducer functions
// in the case of combined actions, use [combineActions(SHOW_LOADER, HIDE_LOADER)] as the object key
export default handleActions({
  ADD_TODO: (state, action) => ({
    ...state,
    todos: state.todos.concat({ id: id += 1, description: action.payload }),
  }),
  REMOVE_TODO: (state, action) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== action.payload),
  }),
  FIX_TODO_NAME: (state, action) => ({
    ...state,
    currentTodo: action.payload,
  }),
}, initialState);

// How to handle errors
// next key is reducer function for happy path
// throw key is reducer function for error
// note that FSA specification means that the action.payload is an error object, hence the use of the message property on the payload object
// LOAD_TODOS: {
//   next: (state, action) => ({ ...state, todos: action.payload }),
//   throw: (state, action) => ({ ...state, message: action.payload.message }),
// }


/** Using handleAction
// handleAction function takes an action type, a reducer function, and the initial state
const addTodoReducer = handleAction(ADD_TODO, (state, action) => ({
  ...state,
  todos: state.todos.concat({ id: id += 1, description: action.payload }),
}), initialState);
const removeTodoReducer = handleAction(REMOVE_TODO, (state, action) => ({
  ...state,
  todos: state.todos.filter(todo => todo.id !== action.payload),
}), initialState);
const fixTodoReducer = handleAction(FIX_TODO_NAME, (state, action) => ({
  ...state,
  currentTodo: action.payload,
}), initialState);

// Can use combineAction method from redux-actions to combine actions types
// that have the same reducer functionality
// const loaderAction = combineActions(SHOW_LOADER, HIDE_LOADER);
// const loaderReducer = handleAction(loaderAction, (state, action) => ({
//   ...state,
//   isLoading: action.payload,
// }), initialState);

export default reduceReducers(
  addTodoReducer,
  removeTodoReducer,
  fixTodoReducer,
);

*/

/**

// Traditional redux reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: state.todos.concat({ id: id += 1, description: action.payload }),
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      }
    }
    case FIX_TODO_NAME: {
      return {
        ...state,
        currentTodo: action.payload,
      }
    }
    default: {
      return state;
    }
  }
};
 */
