var express = require('express');
// var modelTask = require('');
var router = express.Router();
const modelNews = require('../model')

router.post('/', function(req, res) {
    console.log('req.body-- ', req.body);
    modelNews.create(req.body, function (err, result) {
        if(err || !result){
            return res.send({error: 'Tasks not uploaded'});
        }
        res.send(result);
    });
});

//GET users listing.
router.get('/getnews/', function(req, res) {
    console.log('req.body+++', req.body);
    return modelNews.find(function (err, result) {
        if (err || !result) {
            return res.send({error: 'Tasks wasnt got'});
        }

        res.send(result);
    });
    // modelNews.create({text: 'dahjfh', author: 'Vasya', topic: 'shit', tags:'kek lol'}, function (err, result) {
    //     if(err || !result){
    //         return res.send({error: 'Tasks not uploaded'});
    //     }
    //     res.send(result);
    //     console.log(result);
    // });
});

module.exports = router;
