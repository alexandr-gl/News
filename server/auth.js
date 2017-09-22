// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1643226575752424', // your App ID
        'clientSecret'  : '2fab6c17476abc84f6a05943007ac70a', // your App Secret
        'callbackURL'   : 'http://localhost:3001/users/login/facebook/callback'
    }
};