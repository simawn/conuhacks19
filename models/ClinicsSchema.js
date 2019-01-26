const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ClinicsSchema = new Schema({
    name:{
        type: String
    },
    long:{
        type: Number
    },
    lat:{
        type: Number
    },
    calendar:{
        type: Number
    }
});

module.exports = mongoose.model('Clinics', ClinicsSchema);
