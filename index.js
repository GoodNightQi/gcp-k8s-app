const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./user");
const initData = require("./utils");

mongoose
  .connect("mongodb://34.173.114.183:27017/work", {})
  .then(() => {
    initData();
    console.log("===========================================> Database Connected");
  })
  .catch((err) => console.log(err));

const app = express();

app.get("/", async (req, res) => {
  res.send({ msg: "hello" });
});

app.get("/users", async (req, res) => {
  const data = await userModel.find();
  res.send({ msg: "success", data });
});

app.listen(8080, () => console.log("===========================================> express is work"));
