require('dotenv').config();

let express = require('express');
let app = express();
console.log("Hello World");

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





























 module.exports = app;
