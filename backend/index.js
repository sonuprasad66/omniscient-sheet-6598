const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
var cors = require("cors");
app.use(cors());
const PORT = process.env.PORT || 8000;
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/User.route");
const { ProductRouter } = require("./Routes/Products.route");
const { cartRouter } = require("./Routes/ProductCart.route");

app.get("/", (req, res) => {
  res.send({ msg: "Main home Page" });
});

app.use("/", userRouter);
app.use("/", ProductRouter);
app.use("/cart", cartRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("DB connected successfull");
  } catch (err) {
    console.log("Error on DB connecting");
    console.log(err);
  }
  console.log(`App Listening On Port ${process.env.PORT}`);
});
