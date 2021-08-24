const express = require("express");
const { loginUser } = require("../../controller/authen/login.controller");
const routerLogin = express.Router();
routerLogin.post("/", loginUser);
module.exports = {
  routerLogin,
};
