const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: keys.redirect_uri
}, (accessToken, refreshToken, profile, cb) => {
  User.findOne({googleClientId: profile.id})
      .then((user)=> {
        if(user){

        }else {
          new User({
            googleClientId: profile.id
          }).save();
        }
      })
}));
