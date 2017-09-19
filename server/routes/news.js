var express = require('express');
var multer  = require('multer');
//var upload = multer()
// var modelTask = require('');
var router = express.Router();
const modelNews = require('../models/model');




// const upload = multer({ storage });
// router.post('/files', upload.single('file'), (req, res) => {
//     const file = req.file; // file passed from client
//     const meta = req.body; // all other values passed from the client, like name, etc..
//     console.log('file-- ', file);
//     console.log('meta-- ', meta);
//
//     // send the data to our REST API
//     axios({
//         url: `https://api.myrest.com/uploads`,
//         method: 'post',
//         data: {
//             file,
//             name: meta.name,
//         },
//     })
//         .then(response => res.status(200).json(response.data.data))
//         .catch((error) => res.status(500).json(error.response.data));
// });

var storage = multer.diskStorage({
    destination: 'public/',
    filename: function (req, file, cb) {
        cb(null, `${new Date()}-${file.originalname}`);
    }
})
var upload = multer({storage: storage});

router.post('/', upload.single('file'), function(req, res) {
    req.body.file = '/' + req.file.path.substr(7)
    modelNews.create(req.body, function (err, result) {
        if(err || !result){
            return res.send({error: 'Tasks not uploaded'});
        }
        res.send(result);
    });
});

//GET users listing.
router.get('/getnews/', function(req, res) {
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
