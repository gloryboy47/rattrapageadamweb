const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDb = require('./connectdb/connectdb');
const cors = require('cors');

dotenv.config();
const port = process.env.PORT || 5000;

// Enable CORS for all routes (adjust in production for security)
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

const startServer = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();

