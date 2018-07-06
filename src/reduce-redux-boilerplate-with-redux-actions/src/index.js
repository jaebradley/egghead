import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider,
} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import store from './store';
import CurrentApp from './containers/CurrentApp';

ReactDOM.render(
  <Provider store={store}>
    <CurrentApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
