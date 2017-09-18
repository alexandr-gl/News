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

// UserSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

UserSchema.methods.authenticate = function(password) {
    //implementation code goes here
}

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = modelUsers;