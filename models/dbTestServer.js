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
    createUser = await dbAPI.createUser(firstName, lastName).catch((err) => console.log(err));
    res.send(createUser);
});

app.post('/api/createClinic', async (req, res) => {
    console.log(req.body.name);
    res.send('ok');
});

app.post('/api/createScheduleSpot', async (req, res) => {
    res.send('ok');
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
