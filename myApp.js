require('dotenv').config();

let express = require('express');
let app = express();
console.log("Hello World");

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/", (GET, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (GET, res) => {
    let jsonResponse = "Hello json";
    if (process.env.MESSAGE_STYLE == "uppercase") {
        jsonResponse = jsonResponse.toUpperCase();
    }
    res.json({ "message": jsonResponse});
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({ "time": req.time });
});



























 module.exports = app;
