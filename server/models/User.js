const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  amount: {
    type: String,
    default: '0.00',
  },
});

module.exports = mongoose.model('User', userSchema);
