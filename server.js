const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

//For static files (eg. img/css)
app.use(express.static(path.join(__dirname, 'public')));

//For views
app.set('view engine', 'ejs'); //engine
app.use('views', path.join(__dirname, 'views')); //folder

//index
app.get('/', (req, res) => {
    res.sendStatus(200);
    /*
    res.render('index', {
        title: 'test' //<%= title %>
    });
    */
});

//server run
let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
