const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
mongoose.connect(keys.mongodb_uri);

require('./models/User');
require('./services/passport');
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieSecret]
  })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/Auth')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});