require('dotenv').config();

const PORT = 8080;
const MONGODB_URI = process.env.MONGODB_URI;

module.exports = {
  MONGODB_URI,
  PORT
};