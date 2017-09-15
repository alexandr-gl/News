var express = require('express');
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

var modelUsers = mongoose.model('users', UserSchema);
module.exports = modelUsers;