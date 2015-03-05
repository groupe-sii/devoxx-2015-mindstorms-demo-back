'use strict';

var motorEndpoint = require('./motor.js'),
    API_VERSION = '/v1',
    API_ENTRYPOINT = '/api';

module.exports = function(app) {
    app.route(API_ENTRYPOINT + API_VERSION + '/motor')
        .put(motorEndpoint.start);
};
