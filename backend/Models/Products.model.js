const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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
});

const ProductModel = mongoose.model("allproduct", productSchema);

module.exports = { ProductModel };
