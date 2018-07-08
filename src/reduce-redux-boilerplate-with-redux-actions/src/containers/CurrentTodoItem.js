import TodoItem from '../components/TodoItem';

import {
  connect,
} from 'react-redux';

import {
  removeTodo,
} from '../actions';

const CurrentTodoItem = connect(
  () => ({}),
  (dispatch) => ({
    removeTodo: (id) => dispatch(removeTodo(id)),
  }),
)(TodoItem);

export default CurrentTodoItem;
