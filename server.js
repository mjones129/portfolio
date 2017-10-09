var express = require("express");
var app = express();
var ProgressBar = require("progressbar.js");


app.use(express.static('public'));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index");
});
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("You just got SERVED.");
});