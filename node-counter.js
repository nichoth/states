var EE = require('events').EventEmitter;
var bus = new EE();
var emit = bus.emit.bind(bus, 'action');
var storeChange = bus.emit.bind(bus, 'change');

var inc = { type: 'INCREMENT' };
var dec = { type: 'DECREMENT' };

function counter(state = 0, action = {}) {
  var fns = {};
  fns[inc.type] = () => state + 1;
  fns[dec.type] = () => state -1;
  return fns[action.type] ? fns[action.type].call(null) : state;
}

function store(reducer) {
  var state = reducer();
  bus.on('action', function(action) {
    state = reducer(state, action);
    storeChange(state);
  });
}

store(counter);
bus.on('change', console.log.bind(console));

emit(inc);
emit(inc);
emit(dec);

