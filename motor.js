'use strict';

module.exports = {
    start: function(req, res, next) {
        console.log('start motor');
        res.send(true);
    }
};
