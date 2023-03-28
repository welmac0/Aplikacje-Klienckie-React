const express = require("express")
const app = express()
const PORT = 3000;
const path = require('path')
const dane = require('./dane.js')
app.use(express.static('zad14'))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/sklep', (req, res) => {
    var data = dane
    res.send(JSON.stringify(data))
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})