//The architechture is horrible I know -Simon

const express = require('express');
const path = require('path');
const dbAPI = require('./models/dbAPI');

const app = express();

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
app.get('/client', async (req, res) => {
    getAllClinics = await dbAPI.getAllClinics();
    console.log(getAllClinics);
    res.render('client', {
        listOfClinics: getAllClinics
    });
});

//doctor
app.get('/doctor', (req, res) => {
    res.render('doctor');
});

//API ENDPOINTS
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

//server run
let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
