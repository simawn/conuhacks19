const express = require('express');
const path = require('path');

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

//server run
let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
