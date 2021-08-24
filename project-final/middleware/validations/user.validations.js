const validator = require("validator");
const checkEmpty = (req, res, next) => {
  const { hoTen, email, matKhau, soDT, taiKhoan } = req.body;
  if (hoTen && email && matKhau && soDT && taiKhoan) {
    if (validator.isEmail(email)) {
      if (validator.isInt(soDT)) {
        if (
          hoTen.match(
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
              "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
              "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
          )
        ) {
          next();
        } else {
          res.status(400).send("Họ Và Tên sai định dạng");
        }
      } else {
        res.status(400).send("Số Điện Thoại sai định dạng");
      }
    } else {
      res.status(400).send("Email sai định dạng");
    }
  } else {
    res.status(400).send("Bạn Không Được Bỏ Trống");
  }
};
const checkUserEmailExist = (Module) => async (req, res, next) => {
  const { email } = req.body;
  try {
    const detail = await Module.findOne({ where: { email } });
    if (detail) {
      res.status(404).send(`Email Đã Tồn Tại`);
    } else {
      next();
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const checkUserTaiKhoanExist = (Module) => async (req, res, next) => {
  const { taiKhoan } = req.body;
  try {
    const detail = await Module.findOne({ where: { taiKhoan } });
    if (detail) {
      res.status(404).send(`Tài Khoản Đã Tồn Tại`);
    } else {
      next();
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const checkIdUser = (Model) => async (req, res, next) => {
  const { id } = req.params;
  try {
    const detail = await Model.findOne({
      where: {
        id,
      },
    });
    if (detail) {
      next();
    } else {
      res.status(400).send({ Message: "ID NOT FOUND" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  checkEmpty,
  checkUserEmailExist,
  checkUserTaiKhoanExist,
  checkIdUser,
};
