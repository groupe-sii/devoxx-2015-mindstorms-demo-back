'use strict';

var ev3dev  = require('ev3dev'),
    motor   = new ev3dev.Motor(),
    sys     = require('sys'),
    exec    = require('child_process').exec,
    motorOnDuration = 270;

module.exports = {
    start: function(req, res, next) {
        //console.log('start motor');
        // Up ramp
        motor.rampUpSp = 100;
        // Down ramp
        motor.rampDownSp = 100;
        // Run mode
        motor.runMode = 'time';
        // Time spend
        motor.timeSp = motorOnDuration;
        // Power
        motor.dutyCycleSp = 100;
        motor.run = 1;

        setTimeout(function() {
            res.send(true);
        }, motorOnDuration);
    }
};
