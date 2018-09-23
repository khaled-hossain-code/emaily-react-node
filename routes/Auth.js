const passport = require('passport');

module.exports = function (app) {
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile']}));
  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  })
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => res.redirect('/surveys')
    );
  app.get('/api/current_user', (req, res) => res.send(req.user));
}

