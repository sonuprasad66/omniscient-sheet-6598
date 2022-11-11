const { Router } = require("express");
const { ProductModel } = require("../Models/Products.model");
const ProductRouter = Router();

// ProductRouter.get("/alldata", async (req, res) => {
//   let { brand } = req.query;
//   console.log("bbbb", brand);

//   if (brand && brand !== undefined) {
//     let bag = [];
//     brand.map(async (item) => {
//       let data = await ProductModel.find({ brand: item });
//       bag = [...bag, data];
//     });
//     res.send({ data: bag, message: "request successfull" });
//   } else {
//     let data = await ProductModel.find({});
//     res.send({ data: data, message: "request successfull" });
//   }
// });

// db.info.find( { contribs: { $in: [ "ALGOL", "Lisp" ]} } ).pretty()

ProductRouter.get("/alldata", async (req, res) => {
  let q = req.query;
  const arr = q.brand;
  if (arr) {
    let data = await ProductModel.find({ brand: { $in: [...arr] } });
    console.log(data);
    res.send({ data: data, message: "request successfull" });
  } else {
    let data = await ProductModel.find();

    res.send({ data: data, message: "request successfull" });
  }
});

ProductRouter.get("/alldata/:id", async (req, res) => {
  const { id } = req.params;
  let data = await ProductModel.findOne({ id });
  res.send({ data: data, message: "request successfull" });
});

module.exports = {
  ProductRouter,
};
