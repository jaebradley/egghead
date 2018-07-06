import React from 'react';

import CurrentTodoInput from '../containers/CurrentTodoInput';
import Todos from './Todos';

const App = ({ addTodo, todos }) => (
  <div>
    <h1>Very Simple Todo Application</h1>
    <CurrentTodoInput />
    <Todos todos={todos} />
  </div>
)

export default App;
