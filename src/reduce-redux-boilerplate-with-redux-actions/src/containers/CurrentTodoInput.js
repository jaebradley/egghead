import TodoInput from '../components/TodoInput';

import {
  connect,
} from 'react-redux';

import {
  addTodo,
  fixTodoName,
} from '../actions';

const CurrentTodoInput = connect(
  (state) => ({
    name: state.currentTodo,
  }),
  (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo)),
    fixTodoName: (name) => dispatch(fixTodoName(name)),
  }),
)(TodoInput);

export default CurrentTodoInput;
