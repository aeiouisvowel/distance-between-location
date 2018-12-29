"use strict";

const port = 3010;

// google API Key
const key = 'AIzaSyDMHLzGawXfg4dr5S3incEST1h7IQbgggE';

const express = require("express");
const bodyParser = require("body-parser");
var request = require('request');

const app = express();
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.post("/calc-distance", (req, res) => {
    request.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins='+req.body.origins+'&destinations='+req.body.destinations+'&departure_time=now&key='+key, { json: true }, function(err, resp, body) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (err) { res.json({ "data": err }); }
        else { res.json({ "data": body }); }
    });
});

//start server
app.listen(port, function () {
    console.log("Server up and listening");
});