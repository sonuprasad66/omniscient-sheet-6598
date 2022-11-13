const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  strikedPrice: Number,
  imageUrl: String,
  prodHighlights: String,
  longDesc: String,
  shortDesc: String,
  ratings: Number,
  numberOfRatings: String,
  discount: Number,
  brand: String,
  slider: String,
  isSlider: Boolean,
  quantity: { type: Number, default: 1 },
});

const CartModel = mongoose.model("cartproduct", cartSchema);

module.exports = { CartModel };
