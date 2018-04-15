periodical-executer(object)
========================================

[![Build Status](https://travis-ci.org/ramumb/periodical-executer.svg?branch=master)](https://travis-ci.org/ramumb/periodical-executer)
[![Coverage Status](https://coveralls.io/repos/github/ramumb/periodical-executer/badge.svg?branch=master)](https://coveralls.io/github/ramumb/periodical-executer?branch=master)

This is a port of the [PrototypeJS](http://prototypejs.org/) class `PeriodicalExecuter`.
It addresses the common need of calling of a particular function periodically, as
required by all sorts of "polling" mechanisms (e.g., a chatroom or mail client).

`PeriodicalExecuter` accepts an `object` with three properties: one for a `callback`
function (which is passed the `this` parameter), another for a `frequency` number
(defaults to 2000 milliseconds), and one for a `decay` number (defaults to 1000
milliseconds).  The class then exposes two instance methods called `start` and
`stop`, which do as their names imply.

## Installation

  `npm install periodical-executer`

## Usage

    var PeriodicalExecuter = require('periodical-executer');

    var PE = new PeriodicalExecuter({
        callback: function(pe) {
            if (!confirm('Want me to annoy you again later?')) {
                pe.stop();
            }
        },
        frequency: 3000,
        decay: 2000
    });
    
    PE.start();

  In the example above, `PeriodicalExecuter` shields you from multiple parallel
  executions of a callback function, should it take longer than the given interval
  to execute.  This is especially useful if you use one to interact with the user
  at given intervals (e.g. use a prompt or confirm call): this will avoid multiple
  message boxes all waiting to be actioned.

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding
style. Add unit tests for any new or changed functionality. Lint and test your
code.  See the [CONTRIBUTING](CONTRIBUTING.md) file for more detailed information.
