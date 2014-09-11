'use strict';

/*
 * Modified from https://github.com/elliotf/mocha-mongoose
 * http://www.scotchmedia.com/tutorials/express/authentication/1/06
 */

var config = require('./../config');
var mongoose = require('mongoose');

// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

beforeEach(function (done) {

    function clearDB() {
        for (var i in mongoose.connection.collections) {
            mongoose.connection.collections[i].remove(function() {});
        }
        return done();
    }

    if (mongoose.connection.readyState !== 0) {
        return clearDB();
    } else {
        mongoose.connect(config.db.test, function (err) {
            if (err) {
                throw err;
            }
            return clearDB();
        });
    }
});

afterEach(function (done) {
    mongoose.disconnect();
    return done();
});