/**
 * Created by lamberty on 8/6/14.
 */
var assert = require("assert");
var Wordlist = require("../schemas/Wordlist");

describe('Wordlist', function(){
    describe('isEmpty()', function(){
        it('should return true when the list is empty', function(){
            var wordlist1 = new Wordlist({name: 'unit1'});
            assert.equal(wordlist1.isEmpty(), true);
        });
        it('should return false when the list is not empty', function(){
            var wordlist = new Wordlist({words: ["dog", "cat"]});
            assert.equal(wordlist.isEmpty(), false);
        });
    });

    describe('add(thing)', function(){
        it('should add the word to the list', function(){
            var wordlist2 = new Wordlist({name: 'unit2'});
            wordlist2.add("cat");
            wordlist2.add("dog");
            assert.equal(wordlist2.words[0], "cat");
            console.log(wordlist2);
            console.log(typeof wordlist2);
        });
    });

    describe('join(otherlist)', function(){
        it('should combine two lists', function (){
            var wordlist1 = new Wordlist();
            wordlist1.add("bird");
            wordlist1.add("elephant");
            var wordlist2 = new Wordlist();
            wordlist2.add("cat");
            wordlist2.add("dog");
            wordlist1.join(wordlist2);
            console.log(wordlist1.words);
            assert.equal(wordlist1.words.length, 4)
        });
    });

    describe('find(thing)', function(){
        it('returns the index of an item if the item is in the list, else it returns -1', function(){
            var wordlist1 = new Wordlist();
            wordlist1.add("bird");
            wordlist1.add("elephant");
            wordlist1.add("cat");
            wordlist1.add("dog");
            assert.equal(wordlist1.find("bird"), 0);
            assert.equal(wordlist1.find("walrus"), -1);
        });
    });

    describe('remove(thing)', function(){
        it('should remove the word from the wordlist if it is there', function(){
            var wordlist1 = new Wordlist();
            wordlist1.add("bird");
            wordlist1.add("elephant");
            wordlist1.add("cat");
            wordlist1.add("dog");
            assert.equal(wordlist1.find("bird"), 0);
            wordlist1.remove('bird');
            assert.equal(wordlist1.words[0], "elephant");
            assert.equal(wordlist1.words[1], "cat");
            assert.equal(wordlist1.words[2], "dog");
            //var thingie = ["elephant", "cat", "dog"];
            //assert.deepEqual(wordlist1.words, thingie);
        });

        it('should not die if asked to remove a word from the wordlist if it is not there', function(){
            var wordlist1 = new Wordlist();
            wordlist1.add("bird");
            wordlist1.add("elephant");
            wordlist1.add("cat");
            wordlist1.add("dog");
            assert.equal(wordlist1.find("whale"), -1);
            wordlist1.remove('whale');
            assert.equal(wordlist1.words[0], "bird");
            assert.equal(wordlist1.words[1], "elephant");
            assert.equal(wordlist1.words[2], "cat");
            assert.equal(wordlist1.words[3], "dog");
        });

        it('should remove all instances of the word from the wordlist if it is there', function(){
            var wordlist1 = new Wordlist();
            wordlist1.add("bird");
            wordlist1.add("elephant");
            wordlist1.add("cat");
            wordlist1.add("dog");
            wordlist1.add("bird");
            assert.equal(wordlist1.find("bird"), 0);
            wordlist1.remove('bird');
            assert.equal(wordlist1.words[0], "elephant");
            assert.equal(wordlist1.words[1], "cat");
            assert.equal(wordlist1.words[2], "dog");
        });
    });

    describe('updateName(newName)', function() {
        it('should result in the name of the wordlist being changed to the new name', function () {
            var wordlist = new Wordlist();
            console.log("The name of the wordlist is: " + wordlist.name);
            wordlist.updateName("unit 1");
            assert.equal(wordlist.name, "unit 1");
            wordlist.updateName("masterList");
            assert.equal(wordlist.name, "masterList")
        });
    });

});

