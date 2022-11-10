const { Router } = require("express");
const { ProductModel } = require("../Models/Products.model");
const ProductRouter = Router();

ProductRouter.get("/alldata", async (req, res) => {
  let data = await ProductModel.find({});
  res.send({ data: data, message: "request successfull" });
});

module.exports = {
  ProductRouter,
};
