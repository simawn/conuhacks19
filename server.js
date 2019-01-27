//The architechture is horrible I know -Simon

const express = require('express');
const path = require('path');
const dbAPI = require('./models/dbAPI');

const app = express();
app.use(require('body-parser').urlencoded());
//For static files (eg. img/css)
app.use(express.static(path.join(__dirname, 'public')));

//For views
app.set('view engine', 'ejs'); //engine
app.set('views', path.join(__dirname, 'views')); //folder

app.use(express.json());

//index
app.get('/', (req, res) => {
    res.render('index');
});

//client
app.get('/client/:userId', async (req, res) => {
    getAllClinics = await dbAPI.getAllClinics();
    console.log(getAllClinics);
    res.render('client', {
        listOfClinics: getAllClinics,
        userId: req.params.userId
    });
});

//doctor
app.get('/doctor', (req, res) => {
    res.render('doctor');
});

//appointment
app.post('/appointment', async (req, res) => {
    let userId = req.body.userId;
    let clinicId = req.body.clinicId;
    console.log(userId);
    console.log(clinicId);
    let userObj = await dbAPI.getUserInfoFor(userId);
    let clinicObj = await dbAPI.getClinicInfoFor(clinicId);
    res.render('appointment', {
        userName: userObj.firstName,
        clinicName: clinicObj.name,
        userId: userObj._id,
        clinicId: clinicObj._id
    });
})

//appointment confirmation
app.post('/confirmAppointment', async (req, res) => {
    firstName = req.body.fname;
    lastName = req.body.lname;
    cellId = req.body.cellId;
    userId = req.body.userId;
    clinicId = req.body.clinicId;
    console.log(`${firstName}, ${lastName}, ${cellId}, ${userId}, ${clinicId}`);
    res.render('confirm', {
        userId: userId,
        clinicId: clinicId
    });
});
/**
 * =====
 * API ENDPOINTS
 * =====
 */

app.post('/api/createUser', async (req, res) => {
    firstName = req.body.firstName;
    lastName = req.body.lastName;
    console.log(`${firstName} and ${lastName}`);
    newUser = await dbAPI.createUser(firstName, lastName).catch((err) => console.log(err));
    res.send(newUser);
});

app.post('/api/createClinic', async (req, res) => {
    name = req.body.name;
    address = req.body.address;
    lat = req.body.lat;
    long = req.body.long;
    open = req.body.open;
    close = req.body.close;

    newClinic = await dbAPI.createClinic(name, address, lat, long, open, close);
    res.send(newClinic);
});

app.post('/api/createScheduleSpot', async (req, res) => {
    clinicId = req.body.clinicId;
    userId = req.body.userId;
    start = req.body.unixStart;
    end = req.body.unixEnd;

    newScheduleSpot = await dbAPI.createScheduleSlot(clinicId, userId, start, end);
    //appointments = await dbAPI.getAllAppointmentsFrom(clinicId);
    //clinicInfo = await dbAPI.getClinicInfoFor(clinicId);

    //Check if requested hours is within range of opening hours

    //Check if requested hours range is in a valid spot and not overlapping existing slots.
    res.send(newScheduleSpot);
});

//Use post instead?
app.get('/api/getAllAppointmentsFrom/:clinicId', async (req, res) => {
    clinicId = req.params.clinicId;

    allAppointments = await dbAPI.getAllAppointmentsFrom(clinicId);

    res.send(allAppointments);
});

app.get('/api/getAppointmentsForUser/:userId', async (req, res) => {
    userId = req.params.userId;

    allAppointments = await dbAPI.getUserAppointmentsForUser(userId);

    res.send(allAppointments);
});

//server run
let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
