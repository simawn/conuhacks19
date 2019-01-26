const mongoose = require('mongoose');
const Clinics = require('./ClinicsSchema');
const Users = require('./UsersSchema');
const ScheduleSlots = require('./ScheduleSlots');

mongoose.connect('mongodb://localhost/conuhacks19', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
let db = mongoose.connection;

//Making sure database is connected and catching errors
db.once('open', () => {
    console.log('Database connected!');
});
db.on('error', (err) => {
    console.log(err);
});

//Create new user
function createUser(firstName, lastName){
    return new Promise((resolve, reject) => {
        new Users({
            firstName: firstName,
            lastName: lastName
        }).save((err, result) => {
            if(err) reject(err);
            resolve(result);
        });
    });
}

//Create new clinic
function createClinic(name, address, long, lat, open, close){
    return new Promise((resolve, reject) => {
        new Clinics({
            name: name,
            address: address,
            long: long,
            lat: lat,
            open: open,
            close: close
        }).save((err, result) => {
            if(err) reject(err);
            resolve(result);
        });
    });
}

//Create new schedule slot
function createScheduleSlot(clinicId, start, end){
    return new Promise((resolve, reject) => {
        new ScheduleSlots({
            clinicId: clinicId,
            start: start,
            end: end
        })
    });
}

//Check if schedule slot is available
function checkValidScheduleSlot(clinicId, start, end){
    return new Promise((resolve, reject) => {
        
    });
}

module.exports.createUser = createUser;
module.exports.createClinic = createClinic;
module.exports.createScheduleSlot = createScheduleSlot;