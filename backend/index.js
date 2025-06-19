require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');

const app = express();
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',  // Your frontend URL
  credentials: true,                 // Allow cookies/auth headers
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use('/api/auth', authRoutes);

app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ message: "You are authenticated!", user: req.user });
  });
  
  app.listen(5000, () => console.log('Server running on port 5000'));