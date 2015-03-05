'use strict';

var ev3dev = require('ev3dev'),
    motor = new ev3dev.Motor(),
    motorOnDuration = 1000;

module.exports = {
    start: function(req, res, next) {
        console.log('start motor');
        // Up ramp
        motor.rampUpSp = 200;
        // Down ramp
        motor.rampDownSp = 200;
        // Run mode
        motor.runMode = 'time';
        // Time spend
        motor.timeSp = motorOnDuration;
        // Power
        motor.dutyCycleSp = 75;
        motor.run = 1;
        setTimeout(function() {
            res.send(true);
        }, motorOnDuration);
    }
};
