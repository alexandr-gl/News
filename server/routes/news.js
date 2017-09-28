var express = require('express');
var multer  = require('multer');
var router = express.Router();
const modelNews = require('../models/model');


var storage = multer.diskStorage({
    destination: 'public/',
    filename: function (req, file, cb) {
        cb(null, `${new Date()}-${file.originalname}`);
    }
})
var upload = multer({storage: storage});

router.post('/', upload.single('file'), function(req, res) {
    if(req.file !== undefined) {
        req.body.file = '/' + req.file.path.substr(7);
    }
    else{req.body.file = ''};
    modelNews.create(req.body, function (err, result) {
        if(err || !result){
            return res.send({error: 'News not uploaded'});
        }
        res.send(result);
    });
});

//GET users listing.
router.get('/getnews/', function(req, res) {
    return modelNews.find(function (err, result) {
        if (err || !result) {
            return res.send({error: 'News wasnt got'});
        }
        res.send(result);
    });
});

router.get('/getusrnews/:name', function(req, res) {
    modelNews.find({author:  req.params.name}, function (err, result) {
        if (err || !result) {
            return res.send({error: 'News wasnt got'});
        }
        return res.send(result);

    });
});

module.exports = router;
