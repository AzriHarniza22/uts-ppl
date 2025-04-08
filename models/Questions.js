const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  sdgNumber: {
    type: Number,
    required: true,
    min: 1,
    max: 17
  },
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  },
  explanation: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  }
});

module.exports = mongoose.model('Question', questionSchema);