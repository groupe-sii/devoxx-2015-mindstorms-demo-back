'use strict';

var ev3dev  = require('ev3dev'),
    motor   = new ev3dev.Motor(),
    sys     = require('sys'),
    exec    = require('child_process').exec,
    motorOnDuration = 250;

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

        var playWinnningSound = exec('aplay resources/winning.wav', function(error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });

        setTimeout(function() {
            res.send(true);
        }, motorOnDuration);
    }
};
