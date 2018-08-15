// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tableData = [];
var waitData = [];

var reservation = [{
    customerName: "Rich",
    phoneNumber: "000-000-0000",
    customerEmail: "filthyrrrich@gmail.com",
    customerID: "FilthyRich"
},{
    customerName: "Mike",
    phoneNumber: "000-000-0000",
    customerEmail: "mike@gmail.com",
    customerID: "MikeyMike"
},{
    customerName: "Mark",
    phoneNumber: "000-000-0000",
    customerEmail: "mark@gmail.com",
    customerID: "MarkyMark"
}];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
  
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api-table", function(req, res) {
    return res.json(tableData);
});

app.get("/api-wait", function(req, res) {
    return res.json(waitData);
});

app.post('/api-table', function (req, res) {
    if (tableData.length < 5) {
        tableData.push(req.body);
        res.json(true);
    } else {
        waitData.push(req.body);
        res.json(false);
    }
});

app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});

