const mongoose = require('mongoose');

const { Schema } = mongoose;
const chatTimeSchema = new Schema({
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

mongoose.model('Chat', chatTimeSchema);
