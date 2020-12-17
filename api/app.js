require("dotenv").config();
const express = require("express");

const app = express();

app.get('/', function(req,res) {
    res.send("Hello world!");
});

app.listen(process.env.PORT || 3000, function() {
    console.log(`Server started on port ${process.env.PORT || 3000}`);
});