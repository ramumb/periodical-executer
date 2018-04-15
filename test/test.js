'use strict';

var expect = require('chai').expect;
var PeriodicalExecuter = require('../index');

describe('#PeriodicalExecuter', function() {
    it('should return false', function() {
        var result = false;

        var PE = new PeriodicalExecuter({
            callback: function(pe) {
                expect(result).to.be.false;
                pe.stop();
            },
            frequency: 1,
            decay: 1
        });

        PE.start();
    });

    it('should return true', function() {
        var result = true;

        var PE = new PeriodicalExecuter({
            callback: function(pe) {
                expect(result).to.be.true;
                pe.stop();
            },
            frequency: 1,
            decay: 1
        });

        PE.start();
    });
    
    it('should return 0', function() {
        var result = 0;

        var PE = new PeriodicalExecuter({
            callback: function(pe) {
                expect(result).to.equal(0);
                pe.stop();
            },
            frequency: 1,
            decay: 1
        });

        PE.start();
    });
    
    it('should return 1', function() {
        var result = 1;

        var PE = new PeriodicalExecuter({
            callback: function(pe) {
                expect(result).to.equal(1);
                pe.stop();
            },
            frequency: 1,
            decay: 1
        });

        PE.start();
    });
    
    it('should return null', function() {
        var result = null;

        var PE = new PeriodicalExecuter({
            callback: function(pe) {
                expect(result).to.equal(null);
                pe.stop();
            },
            frequency: 1,
            decay: 1
        });

        PE.start();
    });
    
    it('should return undefined', function() {
        var result = undefined;

        var PE = new PeriodicalExecuter({
            callback: function(pe) {
                expect(result).to.equal(undefined);
                pe.stop();
            },
            frequency: 1,
            decay: 1
        });

        PE.start();
    });
});
