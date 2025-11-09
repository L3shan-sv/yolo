// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

// Routes
const productRoute = require('./routes/api/productRoute'); // fixed path

// Mongo URI using Docker container name
const MONGO_URI = process.env.MONGO_URI || 'mongodb://yolo-mongo-1:27017/yolo';

// Retry function for connecting to Mongo
const connectWithRetry = () => {
  console.log('Attempting MongoDB connection...');
  mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Database connected successfully'))
    .catch(err => {
      console.error('❌ MongoDB connection failed, retrying in 3s:', err.message);
      setTimeout(connectWithRetry, 3000); // retry every 3 seconds
    });
};

// Start Mongo connection
connectWithRetry();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(upload.array());

// Routes
app.use('/api/products', productRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));