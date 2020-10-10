const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res, next) => {
    res.send({
        title:"My First Express Server",
        version: "0.0.0"
    });
});

app.listen(port, err => {
    console.log(`server is listening on ${port}`);
});