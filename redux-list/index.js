var redux = require('redux');
var createStore = redux.createStore;

// actions
const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
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

function completeItem(index) {
  return {
    type: COMPLETE_TODO,
    index: index
  };
}

function setFilter(filter) {
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

  if (!state) { return initState; }

  return {
    visFilter: vf(state.visFilter, action),
    todos: (function(todos = [], aciton) {
      var ts = add(...arguments);
      return complete(ts, action);
    })(state.todos, action)
  };
}

function vf(state = visFilters.SHOW_ALL, action) {
  return action.type === SET_VIS_FILTER ?
    action.filter :
    state
  ;
}

function add(state = [], action) {
  return action.type === ADD_TODO ?
    [...state, {
      text: action.text,
      completed: false
    }] :
    state
  ;
}

function complete(state = [], action) {
  return action.type === COMPLETE_TODO ?
    [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], {
        completed: true
      }),
      ...state.slice(action.index + 1)
    ] :
    state
  ;
}


// store
var store = createStore(app);
var unsub = store.subscribe( () =>
  console.log( store.getState() )
);

// Dispatch some actions
store.dispatch(addItem('Learn about actions'));
store.dispatch(addItem('Learn about reducers'));
store.dispatch(addItem('Learn about store'));
store.dispatch(completeItem(0));
store.dispatch(completeItem(1));
store.dispatch(setFilter(visFilters.SHOW_COMPLETED));

unsub();
