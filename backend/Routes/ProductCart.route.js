const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { CartModel } = require("../Models/ProductCart.model");
const { ProductModel } = require("../Models/Products.model");
require("dotenv").config();

const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
  const cart = await CartModel.find();
  res.send({ data: cart, message: "request successfull" });
});

cartRouter.post("/add", async (req, res) => {
  const { id } = req.body;

  let data = await ProductModel.findById({ _id: id });

  const new_cart = new CartModel({
    productName: data.productName,
    price: data.price,
    strikedPrice: data.strikedPrice,
    imageUrl: data.imageUrl,
    prodHighlights: data.prodHighlights,
    longDesc: data.longDesc,
    shortDesc: data.shortDesc,
    ratings: data.ratings,
    numberOfRatings: data.numberOfRatings,
    discount: data.discount,
    brand: data.brand,
  });

  try {
    await new_cart.save();
    res.send({ message: "product added", res: new_cart });
  } catch (err) {
    res.send({ err: "something went wrong, please try later" });
  }
});

cartRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const temp = await CartModel.findOneAndUpdate(
    {
      _id: id,
    },
    req.body
  );

  if (temp) {
    res.send({ message: "product updated" });
  } else {
    res.send({ message: "something went wrong, please try later" });
  }
});

cartRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  const temp = await CartModel.findOneAndDelete({
    _id: id,
  });

  if (temp) {
    res.send({ message: "product deleted" });
  } else {
    res.send({ message: "something went wrong, please try later" });
  }
});

module.exports = {
  cartRouter,
};
