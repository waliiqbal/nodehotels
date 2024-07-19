// db.js
require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URL;

console.log("MongoDB URI:", uri); // Debugging line

if (!uri) {
  throw new Error('MONGO_URL environment variable not set');
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection error:', err));

module.exports = mongoose;

