const express = require("express");
const { User } = require("../../models");
const { registerUser } = require("../../controller/authen/register.controller");
const {
  checkEmpty,
  checkUserEmailExist,
  checkUserTaiKhoanExist,
} = require("../../middleware/validations/user.validations");
const authRouter = express.Router();
authRouter.post(
  "/",
  checkEmpty,
  checkUserEmailExist(User),
  checkUserTaiKhoanExist(User),
  registerUser
);
module.exports = {
  authRouter,
};
