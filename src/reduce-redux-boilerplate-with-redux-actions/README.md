# Reduce Redux Boilerplate With `redux-actions`

Based off of the egghead tutorial, but with a simpler todo list application that only adds and removes todo items, and validates todo item names on input.

## Reduce Action Boilerplate

### `createAction`

The `createAction` method simplifies action creators. `createAction` creates a new function that takes a `type` and returns a Flux Standard Action (or `FSA`) that looks like

```javascript
{
  type: 'SOME TYPE',
  payload: {},
  error: false, // boolean that specifies if payload is an Error object or not
  meta: {},
}
```

Redux does not enforce this object specification. It is a contract that allows for the simplification of action creators from

```javascript
const addTodo = todo => ({ type: ADD_TODO, payload: todo });
```

to

```javascript
const addTodo = createAction(ADD_TODO);
```

### `createActions`

The `createActions` method simplifies further the action creation mechanism implemented by `createAction`.

It takes takes a series of arguments and returns an object with `camelCased` action creators.

If the argument is a string, the action creator is an identity function as it takes a payload and returns an object where the `type` property is the string argument and the `payload` property is the passed-in payload.

If some payload modification needs to occur, the argument should instead be an object with one property. The property name should be the action name, and the property value should be the payload modification function. This function will be called to generate the `payload` property.

This results in action creation that looks like

```javascript
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

export const {
  addTodo,
  removeTodo,
  fixTodoName,
} = createActions(
  {
    [FIX_TODO_NAME]: fixName,
  },
  ADD_TODO,
  REMOVE_TODO,
);
```

## Reduce Reducer Boilerplate

### `handleAction`

The `handleAction` function isolates each action type and instead of having a larger reducer function that could be comprised of a bunch of `switch` / `case` statements, each reducer is now "bite-sized".

Let's say we want to handle the `ADD_TODO` action - the classic `Redux` approach would look something like

```javascript
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: state.todos.concat({ id: id += 1, description: action.payload }),
      };
    }
    default: {
      return state;
    }
  }
};
```

With `handleAction` this would look like

```javascript
const addTodoReducer = handleAction(ADD_TODO, (state, action) => ({
  ...state,
  todos: state.todos.concat({ id: id += 1, description: action.payload }),
}), initialState);
```

The `handleAction` function takes an action type, a reducer function (i.e. a function that applies some `action` to some `state`), and the initial state.

### `handleActions`

Much like `createAction` and `createActions`, `handleActions` combines a series of action handlers by taking an object that represents a mapping between the action types and their reducer functions. `handleActions` also takes the `initialState` as the second parameter.

Here's our add todo reducer from before

```javascript
import {
  handleActions,
} from 'redux-actions';

import {
  ADD_TODO,
} from './actions/types';

export default handleActions({
  [ADD_TODO]: (state, action) => ({
    ...state,
    todos: state.todos.concat({ id: id += 1, description: action.payload }),
  }),
}, initialState);
```

You can see how this can cut down on boilerplate as the number of action handlers grows.

### `combineActions`

If two action handlers have the same reducer function, the `combineActions` function can be used. Use the output of `combinedActions(similarAction1, similarAction2)` as the property key of the action type to reducer map.

### Handling FSA errors

In the action type to reducer map, instead of mapping the property key to a function, map the property key to an object with a `next` and `throw` property.

The `next` property value is the reducer function for the happy path.

The `throw` property value is the reducer function that uses the `payload` property of the passed `action` object. This is because the FSA specification says that the `payload` property must be an error object.
