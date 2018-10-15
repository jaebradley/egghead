import React from 'react';
import Title from '../Title';

class ExampleComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      on: false,
    };
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
      </div>
    );
  }
};

export default ExampleComponent;
