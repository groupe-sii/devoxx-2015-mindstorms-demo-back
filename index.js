'use strict';

/**
 * Setup
 */
var express      = require('express'),
    app          = express();

/**
 * Configuration
 */

app.set('port', process.env.PORT || 3000);

require('./routes.js')(app);

/**
 * Launch
 */
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
