import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
  fetchStarWarsRequest,
} from './actions';

const mapStateToProps = state => (
  {
    starWars: state.starWars,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
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
