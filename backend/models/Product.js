const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: String,
  imageUrl: {
    type: String,
    default: 'https://via.placeholder.com/300',
  },
  price: {
    type: Number,
    required: true,
  },
  categories: [String],
  attributes: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;