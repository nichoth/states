var redux = require('redux');
var createStore = redux.createStore;

// actions
const ADD_TODO = 'ADD_TODO';
const COMPLETETODO = 'COMPLETE_TODO';
const SET_VIS_FILTER = 'SET_VIS_FILTER';

var visFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
};

function addItem(text) {
  return {
    type: ADD_TODO,
    text: text
  };
}

function completeAction(index) {
  return {
    type: COMPLETE_TODO,
    index: index
  };
}

function filterAction(filter) {
  return {
    type: SET_VIS_FILTER,
    filter: filter
  };
}



// "reducer"
function app(state, action) {
  var initState = {
    visFilter: visFilters.SHOW_ALL,
    todos: []
  };

  var fns = {
    SET_VIS_FILTER: function() {
      return Object.assign({}, state, {
        visFilter: action.filter
      });
    },
    ADD_TODO: function() {
      return Object.assign({}, state, {
        todos: [...state.todos, {
          text: action.text,
          completed: false
        }]
      });
    },
    COMPLETE_TODO: function() {
      return Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, action.index),
          Object.assign({}, state.todos[action.index], {
            completed: true
          }),
          ...state.todos.slice(action.index + 1)
        ]
      });
    },
  };

  if (!state) { return initState; }

  return fns[action.type] ? fns[action.type].call(null) : state;
}

