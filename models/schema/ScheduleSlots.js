const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ScheduleSlots = new Schema({
    clinicId:{
        type: Object
    },
    userId:{
        type: Object
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    cellId:{
        type: Number
    },
    symptoms:{
        type: String
    }
});

module.exports = mongoose.model('ScheduleSlots', ScheduleSlots);
