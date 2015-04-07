'use strict';

var ev3dev  = require('ev3dev'),
    battery = new ev3dev.PowerSupply(),
    BATTERY_INTERVAL = 60000;

module.exports = {
    logBattery: function() {
        console.log('Battery: ' + battery.voltageVolts);

        setInterval(function() {
            console.log('Battery: ' + battery.voltageVolts);
            if (battery.voltageVolts > 1.5) {
                process.exit();
            }
        }, BATTERY_INTERVAL);
    }
};
