const { Router } = require("express");
const { ProductModel } = require("../Models/Products.model");
const ProductDetailsRouter = Router();

ProductDetailsRouter.get("/details/:id", async (req, res) => {
  const { id } = req.params;
  let data = await ProductModel.findOne({ id });
  res.send({ data: data, message: "request successfull" });
});

module.exports = {
  ProductDetailsRouter,
};
