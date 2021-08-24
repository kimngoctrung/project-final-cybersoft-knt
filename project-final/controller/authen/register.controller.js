const { User } = require("../../models");
const bcryptjs = require("bcryptjs");
const registerUser = async (req, res) => {
  const { hoTen, email, matKhau, soDT, taiKhoan } = req.body;
  var salt = bcryptjs.genSaltSync(10);
  var hashPassword = bcryptjs.hashSync(matKhau, salt);
  try {
    const newUser = await User.create({
      hoTen,
      email,
      matKhau: hashPassword,
      soDT,
      role: "USER",
      taiKhoan,
    });
    res.status(200).send(newUser);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = {
  registerUser,
};
