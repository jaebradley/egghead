import React from 'react';
import CurrentTodoItem from '../containers/CurrentTodoItem';

const Todos = ({ todos }) => (
  <ul>
    {
      todos.map(todo => (<CurrentTodoItem {...todo} />))
    }
  </ul>
);

export default Todos;
