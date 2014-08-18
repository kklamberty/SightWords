var mongoose = require("mongoose");
var Wordlist = require("../schemas/Wordlist");
var config = require('../config');

var express = require("express");
var app = express();

mongoose.connect(config.db.development);

app.get("/", function (req, res) {
    Wordlist.find(function (err, wordlists) {
        res.send(wordlists);
    })
});

app.listen(3000);




//
//Manually adding things to the dev database
//

//var wordlist = new Wordlist({name: "thirdList", words:["pear", "peach", "mango"], includeInCurrent: false});
//wordlist.save(function (err) {
//    if(err) {
//        console.log("failed");
//    } else {
//        console.log("saved");
//    }
//})


