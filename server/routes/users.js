var express = require('express');
var router = express.Router();
var passport = require('passport');
const modelUsers = require('../models/modelusers');
const jwt = require('jsonwebtoken'); // аутентификация по JWT для hhtp
const jwtsecret = "mysecretkey"; // ключ для подписи JWT

// =====================================
// LOGOUT ==============================
// =====================================
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

//process the signup form
router.post('/', passport.authenticate('local-signup'), function(req, res){
        console.log('req-- ', req);
        console.log('authInfo-- ', req.authInfo);
       //   if  (err || !result){
       //       return res.send({req.authInfo: 'Tasks not uploaded'});
       //   }
       // res.send(result);
});



// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

// process the login form
router.post('/login',  passport.authenticate('local-login'), function(req, res) {
    console.log('777777-- ', 777777)
    const payload = {
        id: req.user._id,
        email: req.user.local.email,
        password: req.user.local.password
    };
    console.log('payload-- ', payload)
    const token = jwt.sign(payload, jwtsecret);
    res.send({
        user : token // get the user out of session and pass to template
    });
    });


module.exports = router;
