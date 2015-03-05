'use strict';

module.exports = {
    getValue: function(req, res, next) {
        console.log('getValue sensor');
        res.send(1);
    }
};
