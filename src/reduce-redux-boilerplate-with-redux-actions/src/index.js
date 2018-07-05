import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider,
  connect,
} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {
  addTodo
} from './reducer';

const mapStateToProps = state => (
  {
    todos: state.todos,
  }
);
const mapDispatchToProps = dispatch => (
  {
    addTodo: (payload) => dispatch(addTodo(payload)),
  }
);

const CurrentApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

ReactDOM.render(
  <Provider store={store}>
    <CurrentApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
