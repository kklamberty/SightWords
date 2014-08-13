/**
 * Created by lamberty on 8/6/14.
 */
var mongoose = require('mongoose');

var Wordlist = mongoose.model('Wordlist', {
    name: String,
    words: [String]
});

module.exports = Wordlist;

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

Wordlist.prototype.remove = function (thing) {
    index = Math.max(-1, this.find(thing));
    if (index == -1){
        console.log("The item '" + thing + "' was not in the wordlist.");
    } else {
        this.words.remove(thing)
    }
};