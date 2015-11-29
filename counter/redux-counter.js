var createStore = require('redux').createStore;

// actions
var inc = { type: 'INCREMENT' };
var dec = { type: 'DECREMENT' };

// "reducer" -- a pure function -- takes state + action and returns new
// state
function counter(state = 0, action) {
  var fns = {};
  fns[inc.type] = () => state + 1;
  fns[dec.type] = () => state -1;
  return fns[action.type] ? fns[action.type].call(null) : state;
}


// pass in functions to apply for actions
let store = createStore(counter);

// An observable with only one event
store.subscribe(function() {
  console.log(store.getState());
});

store.dispatch(inc);
store.dispatch(inc);
store.dispatch(dec);

