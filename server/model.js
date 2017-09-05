let express = require('express');
let mongoose = require('mongoose');
let newsSchema = new mongoose.Schema( {
    text: String,
    author: String,
    topic: String
} );
let modelNews = mongoose.model('news', newsSchema);
module.exports = modelNews;

// var express = require('express');
// var mongoose = require('mongoose');
// var taskSchema = new mongoose.Schema( {
//     //id: Number,
//     text: String,
//     state: Boolean
// } );
// var modelTask = mongoose.model('newTask', taskSchema);
// module.exports = modelTask;