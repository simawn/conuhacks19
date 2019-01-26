const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

//For static files
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendStatus(200);
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
