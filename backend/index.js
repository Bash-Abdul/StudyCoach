require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');

const app = express();
app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRoutes);

app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ message: "You are authenticated!", user: req.user });
  });
  
  app.listen(3000, () => console.log('Server running on port 3000'));