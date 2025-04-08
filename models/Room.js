const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['waiting', 'in-progress', 'completed'],
    default: 'waiting'
  },
  players: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String,
    score: {
      type: Number,
      default: 0
    }
  }],
  currentQuestion: {
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question'
    },
    startTime: Date,
    timeLimit: {
      type: Number,
      default: 30
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add a method to check if the room is full
roomSchema.methods.isFull = function() {
  return this.players.length >= 4; // Maximum 4 players per room
};

module.exports = mongoose.model('Room', roomSchema);