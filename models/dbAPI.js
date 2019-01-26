const mongoose = require('mongoose');
const Clinics = require('./schema/ClinicsSchema');
const Users = require('./schema/UsersSchema');
const ScheduleSlots = require('./schema/ScheduleSlots');

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
function createClinic(name, address, lat, long, open, close){
    return new Promise((resolve, reject) => {
        new Clinics({
            name: name,
            address: address,
            long: long,
            lat: lat,
            open: open, //410 ==> 8am: 480 = 8*60
            close: close //1020 ==> 5pm: 1020 = 17*60 
        }).save((err, result) => {
            if(err) reject(err);
            resolve(result);
        });
    });
}

//Create new schedule slot
function createScheduleSlot(clinicId, userId, start, end){
    return new Promise((resolve, reject) => {
        new ScheduleSlots({
            clinicId: mongoose.Types.ObjectId(clinicId),
            userId: mongoose.Types.ObjectId(userId),
            start: start, //Unix Time. Seconds elapsed
            end: end //Unix Time. Seconds elapsed
        }).save((err, result) => {
            if(err) reject(err);
            resolve(result);
        });
    });
}

//Returns all appointments for the specified clinic
function getAllAppointmentsFrom(clinicId){
    return new Promise((resolve, reject) => {
        ScheduleSlots.find({
            clinicId: mongoose.Types.ObjectId(clinicId)
        }).exec((err, result) => {
            if(err) reject(err);
            resolve(result);
        });
    });
}

//Return clinic info
function getClinicInfoFor(clinicId){
    return new Promise((resolve, reject) => {
        Clinics.find({
            _id: clinicId
        }).exec((err, result) => {
            if(err) reject(err);
            resolve(result);
        })
    });
}

module.exports.createUser = createUser;
module.exports.createClinic = createClinic;
module.exports.createScheduleSlot = createScheduleSlot;
module.exports.getAllAppointmentsFrom = getAllAppointmentsFrom;
module.exports.getClinicInfoFor = getClinicInfoFor;
