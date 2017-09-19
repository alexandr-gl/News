var bcrypt = require('bcrypt');
var express = require('express');
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    local            : {
        email        : String,
        password     : String
    }
});


var modelUsers = mongoose.model('users', UserSchema);

module.exports = modelUsers;