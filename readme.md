# states

State machines in javascript

* redux
* vanilla node
* ampersand state

## install

Clone this repo.


## run

To make things more difficult we're using es6, so you need to run files like `babel-node example.js`.


## redux

A single store (state container) with a single function that handles state mutations.

To handle complex state, split up the event handler function so that operations deal with smaller subsections of the state tree.


## counter example bloat

    $ npm run build && ls -lh dist/counter

    -rw-r--r--  1 nick  staff   186K Dec  1 20:00 amp-counter.js
    -rw-r--r--  1 nick  staff    40K Dec  1 20:01 amp-counter.min.js
    -rw-r--r--  1 nick  staff   9.2K Nov 29 10:55 node-counter.js
    -rw-r--r--  1 nick  staff   4.4K Dec  1 20:02 node-counter.min.js
    -rw-r--r--  1 nick  staff    22K Nov 29 10:55 redux-counter.js
    -rw-r--r--  1 nick  staff   8.2K Dec  1 20:02 redux-counter.min.js

    $ wc -l dist/counter/*r.js

    5914 dist/counter/amp-counter.js
     333 dist/counter/node-counter.js
     673 dist/counter/redux-counter.js
