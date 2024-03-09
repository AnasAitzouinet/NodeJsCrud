const mongoose = require('mongoose');

// Define User Schema
const Equipe = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  Country: {
    type: String,
    required: true
  },

  // add more fields as per your requirements
});

// Export User Model
module.exports = mongoose.model('Equipe', Equipe);
