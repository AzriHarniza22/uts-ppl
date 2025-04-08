const express = require('express');
const cors = require('cors');
const path = require('path');
const socket = require('./socket');
const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./db'); 
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

// Serve static files from React app
app.use(express.static(path.join(__dirname, 'public')));

// Handle React routing - return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  socket(server);
});
