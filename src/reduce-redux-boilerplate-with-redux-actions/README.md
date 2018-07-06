# Reduce Redux Boilerplate With `redux-actions`

Based off of the egghead tutorial, but with a simpler todo list application that only adds and removes todo items.

## `createAction`

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
