const express = require("express");
const { User } = require("../models");
const {
  getListUser,
  getDetailUser,
  addUser,
  removeUser,
  updateUser,
  getListRoleUser,
  searchUser,
} = require("../controller/user.controller");
const {
  authenticate,
  authorize,
} = require("../middleware/auth/verify-token.middleware");
const {
  checkEmpty,
  checkUserEmailExist,
  checkUserTaiKhoanExist,
  checkIdUser,
} = require("../middleware/validations/user.validations");
const userRouter = express.Router();
// getListUser
userRouter.get("/", authenticate, authorize("ADMIN"), getListUser);
// get user detail
userRouter.get("/:id", authenticate, authorize("ADMIN"), getDetailUser);
// add User
userRouter.post(
  "/",
  checkEmpty,
  authorize("ADMIN"),
  checkUserEmailExist(User),
  checkUserTaiKhoanExist(User),
  addUser
);
// xoa user
userRouter.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  checkIdUser(User),
  removeUser
);
// update USer
userRouter.post(
  "/:id",
  authenticate,
  checkIdUser(User),
  checkUserEmailExist(User),
  authorize("ADMIN"),
  updateUser
);
// getListRoleOfUser
userRouter.get("/type/role", authenticate, authorize("ADMIN"), getListRoleUser);
//Search User
userRouter.get("/type/search", authenticate, authorize("ADMIN"), searchUser);
module.exports = {
  userRouter,
};
