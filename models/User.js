const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleClientId: String
});

mongoose.model('users', userSchema);