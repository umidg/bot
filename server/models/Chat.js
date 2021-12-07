const mongoose = require('mongoose');

const { Schema } = mongoose;
const chatSchema = new Schema({
  id: {
    type: String,
  },
  engagements: {
    type: String,
  },
  dropoff: {
    type: String,
  },
  completion: {
    type: String,
  },
});

mongoose.model('Chat', chatSchema);
