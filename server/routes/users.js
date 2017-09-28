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
        const payload = {
            id: req.user._id,
            email: req.user.local.email,
            password: req.user.local.password,
            name: req.user.local.username
        };
        const token = jwt.sign(payload, jwtsecret);
        res.send({
            user : token // get the user out of session and pass to template
        });
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
    const payload = {
        id: req.user._id,
        email: req.user.local.email,
        password: req.user.local.password,
        name: req.user.local.username
    };
    const token = jwt.sign(payload, jwtsecret);
    res.send({
        user : token // get the user out of session and pass to template
    });
    });

// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
router.get('/login/facebook',
    passport.authenticate('facebook', { scope : 'email' }
    ));


router.get('/login/facebook/callback', passport.authenticate('facebook'), (req, res) => {
    const payload = {
        id: req.user.id,
        email: req.user.facebook.email,
        name: req.user.facebook.name,
        surname: req.user.facebook.surname,
        description: req.user.facebook.description,
        image: req.user.facebook.image
    };
    const token = jwt.sign(payload, jwtsecret);
    res.redirect(`/auth?jwtToken=${token}`);
});

router.get('/info/:name', function(req, res) {
    modelUsers.find({'local.username':  req.params.name}, function (err, result) {
        if (err || !result) {
            return res.send({error: 'News wasnt got'});
        }
        return res.send(result);

    });
});

module.exports = router;
