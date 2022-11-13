const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },

});

const userModel = mongoose.model("user", userSchema);

module.exports = {
  userModel,
};
