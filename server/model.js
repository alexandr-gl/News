var express = require('express');
var mongoose = require('mongoose');
var newsSchema = new mongoose.Schema( {
    text: String,
    author: String,
    topic: String,
    tags: String
} );
var modelNews = mongoose.model('news', newsSchema);
module.exports = modelNews;