// Import the mongoose module
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("User", userSchema);