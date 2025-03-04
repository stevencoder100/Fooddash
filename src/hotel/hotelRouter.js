const express = require("express");
const { senddata, senditems, sendcategories, createOrder } = require("./hotelController");

const hotelRouter = express.Router();

hotelRouter.get("/", senddata);
hotelRouter.get("/items", senditems);
hotelRouter.get("/categories", sendcategories);
hotelRouter.post("/order", createOrder);

module.exports = hotelRouter;
