const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/keys');
mongoose.connect(keys.mongodb_uri);

require('./models/User');
require('./services/passport');
const app = express();
require('./routes/Auth')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});