const express = require("express");
const { createUser, checkUser } = require("./userController");

const userRouter = express.Router();

userRouter.post("/register", createUser);
userRouter.post("/login", checkUser);

module.exports = userRouter;