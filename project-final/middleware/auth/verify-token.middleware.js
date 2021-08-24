const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const secretKey = "alibaba";
    const decode = jwt.verify(token, secretKey);
    req.user = decode;
    next();
  } catch (err) {
    res.status(400).send("bạn chưa nhập Token");
  }
};
const authorize = (arrRole) => (req, res, next) => {
  const { user } = req;
  if (user.role.toLocaleLowerCase() == arrRole.toLocaleLowerCase()) {
    next();
  } else {
    res.status(403).send("Bạn Không Có Quyền");
  }
};
module.exports = {
  authenticate,
  authorize,
};
