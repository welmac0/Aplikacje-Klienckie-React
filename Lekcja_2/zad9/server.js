const express = require("express")
const app = express()
const PORT = 3000;
const path = require('path')
const zones = require('./zones.json')
const bodyParser = require('body-parser');
app.use(express.static('zad9'))
app.use(bodyParser.json())

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/page2", function (req, res) {
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, "index2.html"))
})

app.get('/script2.js', function (req, res) {
    res.set('Content-Type', 'application/javascript');
    res.sendFile(path.join(__dirname, 'script2.js'));
});

app.get('/zones', (req, res) => {
    var data = zones
    res.send(JSON.stringify(data, null, 4))
})
var newTimeZones

app.post('/transferData', (req, res) => {
    const data = req.body; // Extract the data from the request body
    console.log(data); // Log the received data
    newTimeZones = data
    const response = {
        success: true,
        message: 'Data received successfully'
    };

    res.json(response); // Send the response back as a JSON object
});

app.get('/transferData', (req, res) => {
    console.log(newTimeZones)
    var data = newTimeZones
    res.end(JSON.stringify(data))
})



app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})