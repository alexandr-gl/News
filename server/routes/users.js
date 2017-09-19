var express = require('express');
var router = express.Router();
var passport = require('passport');
const modelUsers = require('../models/modelusers');

// =====================================
// HOME PAGE (with login links) ========
// =====================================
router.get('/', function(req, res) {
    res.render('index.ejs'); // load the index.ejs file
});

// =====================================
// LOGIN ===============================
// =====================================
// show the login form
router.get('/login', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('login.ejs', { message: req.flash('loginMessage') });
});

// process the login form
// app.post('/login', do all our passport stuff here);

// =====================================
// SIGNUP ==============================
// =====================================
// show the signup form
router.get('/signup', function(req, res) {

    // render the page and pass in any flash data if it exists
});

// process the signup form
// app.post('/signup', do all our passport stuff here);

// =====================================
// PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
router.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
        user : req.user // get the user out of session and pass to template
    });
});

// =====================================
// LOGOUT ==============================
// =====================================
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

//process the signup form
router.post('/', passport.authenticate('local-signup'))
// router.post('/', passport.authenticate('local-signup'), function(req, res) {
//     console.log('error-- ', error);
//     // modelNews.create(req.body, function (err, result) {
//     //     if(err || !result){
//     //         return res.send({error: 'Tasks not uploaded'});
//     //     }
//     //     res.send(result);
//     // });
// });



// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

// process the login form
router.post('/login', passport.authenticate('local-login'), function() {
    res.send({
        user : req.user // get the user out of session and pass to template
    });
    });


module.exports = router;
