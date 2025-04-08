const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 30
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 1024
  },
  score: {
    type: Number,
    default: 0
  },
  badges: {
    type: Number,
    default: 0
  },
  progress: {
    sdgZonesUnlocked: [Number],
    completedQuizzes: [String]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);