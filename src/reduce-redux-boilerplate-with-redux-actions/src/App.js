import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <button onClick={() => this.props.addTodo({ description: 'foo' })}>
          Add Todo
        </button>
        <ul>
          {
            this.props.todos.map(todo => {
              return (
                <li>
                  {todo.description}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
