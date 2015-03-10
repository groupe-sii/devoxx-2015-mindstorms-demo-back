'use strict';

var ev3dev = require('ev3dev'),
    sensor1 = new ev3dev.Sensor('in1'),
    sensor2 = new ev3dev.Sensor('in2');

module.exports = {
    init: function(io) {
        io.on('connection', function(socket) {
            var readSensorsValuesInterval = null,
                readSensorsValues = function() {
                    readSensorsValuesInterval = setInterval(function() {
                        var values = {
                            sensor1: sensor1.getValue(0),
                            sensor2: sensor2.getValue(0)
                        };
                        socket.emit('sensorValue', values);
                    }, 100);
                },
                stopReadSensorsValues = function() {
                    clearInterval(readSensorsValuesInterval);
                };

            socket.on('startReadingSensors', function(cb) {
                readSensorsValues();
                cb();
            });

            socket.on('stopReadingSensors', function(cb) {
                stopReadSensorsValues();
                cb();
            });
        });
    }
};
