const mongoose = require('mongoose');

const { Schema } = mongoose;
const chatTimeSchema = new Schema({
  id: {
    type: String,
  },
  user: {
    type: String,
  },
  engagement: {
    type: String,
  },
  dropoff: {
    type: String,
  },
  completion: {
    type: String,
  },
});

module.exports = mongoose.model('Chat', chatTimeSchema);
