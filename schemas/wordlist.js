/**
 * Created by lamberty on 8/6/14.
 */
var mongoose = require('mongoose');
module.exports = Wordlist;

var Wordlist = mongoose.model('Wordlist', {
    name: String,
    words: [String]
});

function Wordlist(name) {
    return new Wordlist({name: name, words: []});
}

Wordlist.prototype.isEmpty = function () {
    return this.words.length == 0;
};

Wordlist.prototype.add = function (thing) {
    this.words.push(thing);
};

Wordlist.prototype.join = function (otherList) {
    for (i=0; i<otherList.words.length; i++) {
        this.add(otherList.words[i]);
        console.log(otherList.words[i]);
    }
};

Wordlist.prototype.find = function (thing) {
    index = -1;
    for (i=0; i<this.words.length; i++) {
        if (this.words[i]==thing) {
            console.log("The item " + thing + " was found at location " + i);
            return i;
        }
    }
    return index;
};