import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ id, description, removeTodo }) => (
  <li>
    { description }
    <button onClick={() => removeTodo(id)}>Remove todo</button>
  </li>
);

TodoItem.propTypes = {
  description: PropTypes.string.isRequired,
};

export default TodoItem;
