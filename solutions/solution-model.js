const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Solutions Model
const SolutionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    username: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  votes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    },
  ],
});

module.exports = Solutions = mongoose.model('solutions', SolutionSchema);
