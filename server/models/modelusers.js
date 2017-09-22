var bcrypt = require('bcrypt');
var express = require('express');
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    local            : {
        email        : String,
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
});


var modelUsers = mongoose.model('users', UserSchema);

module.exports = modelUsers;