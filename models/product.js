const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  brend: String,
  model: String,
  img: String,
  description: String,
  price: String,
  color: String,
  size: String,
  favorite: Boolean,
});

const Product = model("product", productSchema);

module.exports = Product;
