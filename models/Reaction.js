const { Schema } = require('mongoose');
const date = require('../utils/dateFormat');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    timestamp: true,
    get: (timestamp) => data(timestamp)
  }
});

module.exports = reactionSchema;