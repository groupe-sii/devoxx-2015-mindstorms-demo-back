'use strict';

var motorEndpoint   = require('./motor.js'),
    sensorEndpoint  = require('./sensor.js'),
    API_VERSION     = '/v1',
    API_ENTRYPOINT  = '/api';

module.exports = function(app, io) {
    app.route(API_ENTRYPOINT + API_VERSION + '/motor')
        .put(motorEndpoint.start);

    sensorEndpoint.init(io);
};
