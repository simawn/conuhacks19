const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ScheduleSlots = new Schema({
    clinicId:{
        type: Object
    },
    start:{
        type: Date
    },
    end:{
        type: Date
    }
});

module.exports = mongoose.model('ScheduleSlots', ScheduleSlots);
