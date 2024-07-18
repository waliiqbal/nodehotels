const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const menuCardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  taste: {
    type: String,
    required: true
  },
  isDrink: {
    type: Boolean,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  numberOfSales: {
    type: Number,
    default: 0
  }
});

// Create a model
const MenuCard = mongoose.model('MenuCard', menuCardSchema);

module.exports = MenuCard;


