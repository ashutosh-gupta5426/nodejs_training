const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  dbUsername: process.env.MONGODB_USERNAME,
  dbPassword: process.env.MONGODB_PASSWORD,
  port: process.env.PORT
};