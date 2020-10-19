const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
    res.render('index', {
        title:"My First Express Server",
        version: "0.0.0"
    });
});

app.listen(port, err => {
    console.log(`server is listening on ${port}`);
});