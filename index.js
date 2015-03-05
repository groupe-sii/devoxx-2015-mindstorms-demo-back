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

require('./routes.js')(app, io);

/**
 * Launch
 */
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
