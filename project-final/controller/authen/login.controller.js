const bcryptjs = require("bcryptjs");
const { User } = require("../../models");
const jwt = require("jsonwebtoken");
const loginUser = async (req, res) => {
  const { email, matKhau } = req.body;
  try {
    const userLogin = await User.findOne({
      where: { email },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    if (userLogin) {
      const isAuth = bcryptjs.compareSync(matKhau, userLogin.matKhau);
      if (isAuth) {
        const payLoad = {
          id: userLogin.id,
          email: userLogin.email,
          role: userLogin.role,
        };
        const secretKey = "alibaba";
        const token = jwt.sign(payLoad, secretKey);

        res.status(200).send({ message: "LOGIN SUCCESSFUL", userLogin, token });
      } else {
        res.status(400).send("PASSWORD IS WRONG");
      }
    } else {
      res.status(404).send("EMAIL NOT FOUND");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  loginUser,
};
