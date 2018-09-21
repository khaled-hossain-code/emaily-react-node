const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: keys.redirect_uri
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({googleClientId: profile.id})
      .then((user)=> {
        if(user){
          done(null, user);
        }else {
          new User({
            googleClientId: profile.id
          })
          .save()
          .then( newUser => {
            done(null, newUser);
          })
        }
      })
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done)=> {
  User.findById(id)
    .then( user => {
      done(null, user);
    });
});