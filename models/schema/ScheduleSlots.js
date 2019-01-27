const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ScheduleSlots = new Schema({
    clinicId:{
        type: Object
    },
    userId:{
        type: Object
    },
    cellId:{
        type: Number
    },
    symptoms:{
        type: String
    }
});

module.exports = mongoose.model('ScheduleSlots', ScheduleSlots);
