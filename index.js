'use strict';

/**
 * Setup
 */
var express = require('express'),
    app     = express(),
    http    = require('http').Server(app),
    io      = require('socket.io')(http);

/**
 * Configuration
 */

http.listen(3000);

require('./routes.js')(app);

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

});

/**
 * Launch
 */
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
