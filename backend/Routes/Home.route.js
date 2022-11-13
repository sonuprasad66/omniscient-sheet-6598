const { Router } = require("express");
const { ProductModel } = require("../Models/Products.model");
const HomePageRouter = Router();





HomePageRouter.get("/homealldata", async (req, res) => {
    let {brand}= req.query;
    let data = await ProductModel.find({brand});
    //console.log(brand)
    res.send({ data: data, message: "request successfull" });
  });
  HomePageRouter.get("/homealldata/:id", async (req, res) => {
    const { id } = req.params;
    let data = await ProductModel.findById({ _id:id });
    res.send({ data: data, message: "request successfull" })
  });

  module.exports={
    HomePageRouter
  }