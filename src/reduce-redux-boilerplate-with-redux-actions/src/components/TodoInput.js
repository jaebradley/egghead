import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.props.fixTodoName(e.target.value);
  }

  render() {
    const {
      addTodo,
    } = this.props;
    return (
      <div>
        <input
          type={'text'}
          value={this.props.name}
          onChange={this.handleOnChange}
          onKeyDown={(e) => { if (e.keyCode === 13) { addTodo(e.target.value) } } }
        />
      </div>
    );
  }
};

export default TodoInput;
