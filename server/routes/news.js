var express = require('express');
// var modelTask = require('');
var router = express.Router();
const modelNews = require('../model')

//GET users listing.
router.get('/getnews/', function(req, res) {
    console.log('-- ',req.data )
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

router.post('/', function(req, res) {
    modelNews.create(req.body, function (err, result) {
        if(err || !result){
            return res.send({error: 'Tasks not uploaded'});
        }
        res.send(result);
    });
    console.log('server-- ', req.body);
});

module.exports = router;
