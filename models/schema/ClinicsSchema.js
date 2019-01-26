const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ClinicsSchema = new Schema({
    name:{
        type: String
    },
    address:{
        type: String
    },
    long:{
        type: Number
    },
    lat:{
        type: Number
    },
    open:{
        type: Number //Range: 0 - 1440. Convert the hours in minutes
    },
    close:{
        type: Number //Same as above
    },
});

module.exports = mongoose.model('Clinics', ClinicsSchema);
