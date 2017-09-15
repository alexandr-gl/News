var express = require('express');
var mongoose = require('mongoose');
var newsSchema = new mongoose.Schema( {
    newstext: String,
    author: String,
    topic: String,
    tags: String,
    file: String
} );
var modelNews = mongoose.model('news', newsSchema);
module.exports = modelNews;