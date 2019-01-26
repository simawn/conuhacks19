const express = require('express');
const dbAPI = require('./dbAPI');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('DB test server running!');
});

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
    start = req.body.unixStart;
    end = req.body.unixEnd;

    appointments = await dbAPI.getAllAppointmentsFrom(clinicId);

    //
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
