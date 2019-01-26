const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ScheduleSlots = new Schema({
    clinicId:{
        type: Object
    },
    start:{
        type: Number //Epoch. Seconds since Jan 1, 1970
    },
    end:{
        type: Number //Epoch
    }
});

module.exports = mongoose.model('ScheduleSlots', ScheduleSlots);
