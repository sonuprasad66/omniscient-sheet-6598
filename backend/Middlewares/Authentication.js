const express = require("express");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  //   console.log(token);
  if (!token) {
    res.send({ msg: " Login Again" });
  } else {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { user_id } = decoded;
    if (decoded) {
      req.body.user_id = user_id;
      next();
    } else {
      res.send({ msg: "Please Login Again" });
    }
  }
};

module.exports = {
  authentication,
};
