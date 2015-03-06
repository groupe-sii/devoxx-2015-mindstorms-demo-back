'use strict';

/**
 * Setup
 */
var express = require('express'),
    app     = express(),
    http    = require('http').Server(app),
    io      = require('socket.io')(http),
    port    = 3000;

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
