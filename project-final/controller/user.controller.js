const { User, sequelize } = require("../models");
const bcryptjs = require("bcryptjs");

//get list user
const getListUser = async (req, res) => {
  let { page, size } = req.query;
  page = parseInt(page);
  size = parseInt(size);
  /// =======* Get list Pagination *=======
  if (page > -1 && size > 0) {
    try {
      const userList = await User.findAll({
        offset: page,
        limit: size,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      const total = await User.count({});
      res.status(200).send({ userList, total });
    } catch (err) {
      res.status(500).send(err);
    }
  } else if (page > -1) {
    try {
      const userList = await User.findAll({
        offset: page,
        limit: 4,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      const total = await User.count({});
      res.status(200).send({ userList, total });
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    try {
      const userList = await User.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      const total = await User.count({});
      res.status(200).send({ userList, total });
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
//get detail user
const getDetailUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userDetail = await User.findOne({
      where: { id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    if (userDetail === null) {
      res.status(404).send("ID NOT FOUND");
    } else {
      res.status(200).send(userDetail);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
// add user
const addUser = async (req, res) => {
  const { hoTen, email, matKhau, soDT, role, taiKhoan } = req.body;
  var salt = bcryptjs.genSaltSync(10);
  var hashPassword = bcryptjs.hashSync(matKhau, salt);
  try {
    const newUser = await User.create({
      hoTen,
      email,
      matKhau: hashPassword,
      soDT,
      role,
      taiKhoan,
    });
    res.status(200).send(newUser);
  } catch (err) {
    res.status(400).send(err);
  }
};
// remove user
const removeUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("xóa thành công");
  } catch (err) {
    res.status(400).send(err);
  }
};
// update User
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { hoTen, email, soDT, role } = req.body;
  try {
    await User.update(
      { hoTen, email, soDT, role },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).send("update thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};
// get list role user
const getListRoleUser = async (req, res) => {
  try {
    const userList = await User.findAll({});
    const listRole = [];

    for (let key of userList) {
      const objRole = { hoTen: key.hoTen, loaiNguoiDung: key.role };
      listRole.push(objRole);
    }

    res.status(200).send(listRole);
  } catch (err) {
    res.status(500).send(err);
  }
};
// search User in User List
const searchUser = async (req, res) => {
  let { taiKhoan, page, size } = req.query;
  if (page && size > 0) {
    try {
      const [result] = await sequelize.query(`
      select id, taiKhoan,email,matKhau,soDT,role,hoTen from  users where taiKhoan like "%${taiKhoan}%" limit ${page} , ${size};
      `);
      const [result2] = await sequelize.query(`
      select * from  users where taiKhoan like "%${taiKhoan}%";
      `);
      result.unshift({ tongSoLuong: result2.length });
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  } else if (page) {
    try {
      const [result] = await sequelize.query(`
      select id, taiKhoan,email,matKhau,soDT,role,hoTen from  users where taiKhoan like "%${taiKhoan}%" limit ${page} , 4;
      `);

      const [result2] = await sequelize.query(`
      select * from  users where taiKhoan like "%${taiKhoan}%";
      `);
      result.unshift({ tongSoLuong: result2.length });
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    try {
      const [result] = await sequelize.query(`
      select id, taiKhoan,email,matKhau,soDT,role,hoTen from  users where taiKhoan from  users where taiKhoan like "%${taiKhoan}%";
      `);
      result.unshift({ tongSoLuong: result.length });
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
module.exports = {
  getListRoleUser,
  getDetailUser,
  getListUser,
  removeUser,
  updateUser,
  addUser,
  searchUser,
};
