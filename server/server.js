var mongoose = require("mongoose");
var Wordlist = require("../schemas/Wordlist");
var config = require('../config');

mongoose.connect(config.db.development);




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


