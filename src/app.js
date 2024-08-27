const express = require("express");
const dotenv = require('dotenv');
const hotelRouter = require("./hotel/hotelRouter")
const userRouter = require("./user/userRouter");
const compression = require("compression");
dotenv.config()

const app = express(); 
app.use(compression());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to hotel APIs" });
});

app.use("/api/hotel", hotelRouter);
app.use("/api/user", userRouter);

module.exports = app;
