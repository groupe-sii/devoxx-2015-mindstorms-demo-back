'use strict';

var ev3dev = require('ev3dev'),
    sensor1 = new ev3dev.Sensor('in1'),
    sensor2 = new ev3dev.Sensor('in2');

module.exports = {
    init: function(io) {
        io.on('connection', function(socket) {
            console.log('User connected');
            socket.on('readSensor', function(cb) {
                cb();
            });

            setTimeout(function() {
                socket.emit('sensorValue', {
                    sensor1: 1,
                    sensor2: 0
                });
            }, 2000);

            setInterval(function() {
                console.log('sensor1 value: ', sensor1.getValue(0));
                console.log('sensor2 value: ', sensor2.getValue(0));
            }, 1000)

        });
    }
};
