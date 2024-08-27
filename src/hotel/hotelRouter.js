const express = require("express");
const { senddata, senditems, sendcategories} = require("./hotelController");

const hotelRouter = express.Router();

hotelRouter.get("/", senddata);
hotelRouter.get("/items", senditems);
hotelRouter.get("/categories", sendcategories);

module.exports = hotelRouter;