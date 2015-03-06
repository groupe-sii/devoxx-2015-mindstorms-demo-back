'use strict';

var ev3dev = require('ev3dev'),
    motor = new ev3dev.Motor(),
    motorOnDuration = 245;

module.exports = {
    start: function(req, res, next) {
        console.log('start motor');
        // Up ramp
        motor.rampUpSp = 100;
        // Down ramp
        motor.rampDownSp = 100;
        // Run mode
        motor.runMode = 'time';
        // Time spend
        motor.timeSp = motorOnDuration;
        // Power
        motor.dutyCycleSp = 50;
        motor.run = 1;
        setTimeout(function() {
            res.send(true);
        }, motorOnDuration);
    }
};
