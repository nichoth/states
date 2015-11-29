var State = require('ampersand-state');

var Counter = State.extend({
  initialize: function() {
    this.inc = () => this.set('count', this.count+1);
    this.dec = () => this.set('count', this.count-1);
  },
  props: {
    count: {
      type: 'number',
      required: 'false',
      default: 0
    }
  }
});

var counter = new Counter();
counter.on('change', function(c) {
  console.log(c.get('count'));
});

counter.inc();
counter.inc();
counter.dec();

