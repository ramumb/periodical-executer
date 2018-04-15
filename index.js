'use strict';

/**
 * This is a port of the PrototypeJS class PeriodicalExecuter. It oversees the
 * calling of a particular function periodically. It accepts an `object` with three
 * properties for a `callback` function, a `frequency` number, and a `decay` number.
 * @param {object} An object with callback, freqency, and `decay` properties
 * @return {PeriodicalExecuter} An instance of the PeriodicalExecuter class
 */

function PeriodicalExecuter(args) {
	var args = args || {},
		callback = args.callback || void(0),
		frequency = args.frequency || 2000,
		decay = args.decay || 1000,
		timer = null,
		delay = null,
		executing = false;

	function timeout() {
		if (!delay) {
			delay = frequency;
		} else {
			delay += decay;
		}
		return delay;
	};

	function onTimerEvent() {
		if (!executing) {
			// IE doesn't support `finally` statements unless all errors
			// are caught. We mimic the behaviour of `finally` statements
            // by duplicating code that would belong in it. First at the
            // bottom of the `try` statement (for errorless cases). Secondly,
            // inside a `catch` statement which rethrows any caught errors.
			try {
				executing = this.execute();
				executing = false;
			} catch (e) {
				executing = false;
				throw e;
			}
		}
	};

	this.execute = function() {
		callback(this);
		if (timer) {
			this.start();
		}
	};

	this.start = function() {
		timer = setTimeout(onTimerEvent.bind(this), timeout());
	};

	this.stop = function() {
		timer = null;
		delay = null;
		executing = false;
	};
}

module.exports = PeriodicalExecuter;
