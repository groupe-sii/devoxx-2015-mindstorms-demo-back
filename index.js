'use strict';

/**
 * Setup
 */
var express         = require('express'),
    app             = express(),
    http            = require('http').Server(app),
    io              = require('socket.io')(http),
    keypress        = require('keypress'),
    batteryEndpoint = require('./batery.js'),
    port            = 3000;

/**
 * Configuration
 */

http.listen(port);

require('./routes.js')(app, io);

/**
 * Launch
 */
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + port);
});

batteryEndpoint.logBattery();

keypress(process.stdin);

process.stdin.on('keypress', function(ch, key) {
    if (key && key.name === 'return') {
        process.stdin.pause();
        process.exit();
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();
