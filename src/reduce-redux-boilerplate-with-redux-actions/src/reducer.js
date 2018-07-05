const initialState = {
    todos: [],
    currentTodo: '',
    isLoading: true,
    message: '',
};

const UPDATE_CURRENT = 'UPDATE_CURRENT';
const ADD_TODO = 'ADD_TODO';
const LOAD_TODOS = 'LOAD_TODOS';
const REPLACE_TODO = 'REPLACE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';


const updateCurrent = text => ({ type: UPDATE_CURRENT, payload: text });
const loadTodos = todos => ({ type: LOAD_TODOS, payload: todos });
const addTodo = todo => ({ type: ADD_TODO, payload: todo });
const replaceTodo = todo => ({ type: REPLACE_TODO, payload: todo });
const removeTodo = id => ({ type: REMOVE_TODO, payload: id });

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO: {
        return {
          ...state,
          currentTodo: '',
          todos: state.todos.concat(action.payload),
        };
      }
      case LOAD_TODOS: {
        return {...state, todos: action.payload };
      }
      case UPDATE_CURRENT: {
        return {...state, currentTodo: action.payload };
      }
      case REPLACE_TODO: {
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id === action.payload.id) {
              return action.payload;
            }
            return todo;
          }),
        };
      }
      case REMOVE_TODO: {
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id !== action.payload) {
              return todo;
            }
          })
        }
      }
      default: {
        return state;
      }
    }
};

export {
  updateCurrent,
  loadTodos,
  addTodo,
  replaceTodo,
  removeTodo,
};
export default reducer;
