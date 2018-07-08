import {
  connect,
} from 'react-redux';

import App from '../components/App';
import {
  addTodo
} from '../actions';

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

export default CurrentApp;
