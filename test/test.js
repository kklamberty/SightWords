/**
 * Created by lamberty on 8/6/14.
 */
var assert = require("assert");
var Wordlist = require("../schemas/Wordlist");

describe('Wordlist', function(){
    describe('isEmpty()', function(){
        it('should return true when the list is empty', function(){
            var wordlist1 = new Wordlist('unit1');
            assert.equal(wordlist1.isEmpty(), true);
        })
    });

    describe('add(thing)', function(){
        it('should add the word to the list', function(){
            var wordlist2 = new Wordlist('unit2');
            wordlist2.add("cat");
            wordlist2.add("dog");
            assert.equal(wordlist2.words[0], "cat");
            console.log(wordlist2);
            console.log(typeof wordlist2);
        })
    });

    describe('join(otherlist)', function(){
        it('should combine two lists', function (){
            var wordlist1 = new Wordlist('unit1');
            wordlist1.add("bird");
            wordlist1.add("elephant");
            var wordlist2 = new Wordlist('unit2');
            wordlist2.add("cat");
            wordlist2.add("dog");
            wordlist1.join(wordlist2);
            console.log(wordlist1.words);
            assert.equal(wordlist1.words.length, 4)

        })
    });

    describe('find(thing)', function(){
        it('returns the index of an item if the item is in the list, else it returns -1', function(){
            var wordlist1 = new Wordlist('unit1');
            wordlist1.add("bird");
            wordlist1.add("elephant");
            wordlist1.add("cat");
            wordlist1.add("dog");
            assert.equal(wordlist1.find("bird"), 0);
            assert.equal(wordlist1.find("walrus"), -1);
        })
    });

//    describe('remove(thing)', function(){
//        it('should remove the word from the wordlist if it is there', function(){
//            var wordlist1 = new Wordlist('unit1');
//            wordlist1.add("bird");
//            wordlist1.add("elephant");
//            wordlist1.add("cat");
//            wordlist1.add("dog");
//            assert.equal(wordlist1.find("bird"), 0);
//            wordlist1.remove('bird');
//            assert.equal(wordlist1.words, [ 'elephant', 'cat', 'dog' ]);
//        })
//    });
});
//
//describe('stack', function(){
//    describe('#push', function(){
//        it('should return true if the variable is pushed', function(){
//            var newstack = new MyStack()
//            newstack.push("hello world")
//            assert.equal(newstack.peek(), "hello world")
//        })
//    })
//})
//
//describe('stack', function(){
//    describe('#peek', function(){
//        it('should return true if the the function sees the value of the last index of the stack', function(){
//            var newstack = new MyStack()
//            newstack.push("first entyr")
//            newstack.push("hello world")
//            assert.equal(newstack.peek(), "hello world")
//        })
//    })
//})
//
//describe('stack', function(){
//    describe('#pop', function(){
//        it('should return true if the variable is popped', function(){
//            var newstack = new MyStack()
//            newstack.push("hello world")
//            assert.equal("hello world", newstack.peek())
//            newstack.pop()
//            newstack.pop()
//            assert.equal(true, newstack.isEmpty())
//            newstack.push(0)
//            newstack.push(1)
//            newstack.pop()
//            assert.equal(newstack.peek(), 0)
//        })
//    })
//})