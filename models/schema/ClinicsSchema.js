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
        type: Number
    },
    close:{
        type: Number
    },
});

module.exports = mongoose.model('Clinics', ClinicsSchema);
