import React from 'react';
import Title from '../Title';

class ExampleComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      on: false,
      inputValue: '',
      mainColor: 'blue',
      lifeCycleMethod: '',
    };
  }

  componentDidMount() {
    this.setState({ lifeCycleMethod: 'componentDidMount' });
  }

  componentWillReceiveProps() {
    this.setState({ lifeCycleMethod: 'componentWillReceiveProps' });
  }

  handleStrings(value) {
    return value === 'jaebaebae';
  }

  render() {
    return (
      <div>
        <header className={"jae baebae"}>
          <img
            src={'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'}
            alt={'React logo'}
            />
          <h1>
            Blah blah blah I'm an example
          </h1>
          <h3 className={this.state.mainColor}>Everyone is Welcome!</h3>
        </header>
        <Title text={"Blah blah blah I'm a Title"} />
        <p className={"example-content"}>
          Blah blah blah I'm a p element
        </p>
        <p className='button-state'>
          { this.state.on ? 'Yes!' : 'No!'}
        </p>
        <button onClick={() => this.setState({ on: true })}>
          Click me
        </button>
        <h2>
          {this.state.inputValue}
        </h2>
        <input onChange={e => this.setState({ inputValue: e.currentTarget.value })} />
        <p className='lifeCycleMethod'>
          {this.state.lifeCycleMethod}
        </p>
      </div>
    );
  }
};

export default ExampleComponent;
