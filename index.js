const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.sendStatus(200);
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
