const { Router } = require("express");
const { ProductModel } = require("../Models/Products.model");
const ProductRouter = Router();

// ProductRouter.get("/alldata", async (req, res) => {
//   const { brand, discount } = req.query;

//   if (brand) {
//     let data = await ProductModel.find({ brand: { $in: [...brand] } });
//     res.send({ data: data, message: "request successfull" });
//   } else {
//     let data = await ProductModel.find();
//     res.send({ data: data, message: "request successfull" });
//   }
// });

ProductRouter.get("/alldata", async (req, res) => {
  const { brand, discount } = req.query;
  let data;

  // console.log(discount);

  if (brand && discount) {
    data = await ProductModel.find({
      brand: { $in: brand },
      discount: { $gt: discount[0] },
    });
  } else if (brand) {
    data = await ProductModel.find({
      brand: { $in: brand },
    });
  } else if (discount) {
    data = await ProductModel.find({
      discount: { $gt: discount[0] },
    });
  } else {
    data = await ProductModel.find();
  }
  res.send({ data: data, message: "request successfull" });
});

module.exports = {
  ProductRouter,
};
