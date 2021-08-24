const dateFormat = require("dateformat");
const momentjs = require("moment");
const checkMovieExist = (Module) => async (req, res, next) => {
  const { tenPhim } = req.body;
  try {
    const detail = await Module.findOne({ where: { tenPhim } });
    if (detail) {
      res.status(404).send(`Tên phim hoặc mã phim đã tồn tại`);
    } else {
      next();
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const checkMaPhimExist = (Module) => async (req, res, next) => {
  const { maPhim } = req.body;
  try {
    const detail = await Module.findOne({ where: { maPhim } });
    if (detail) {
      res.status(404).send(`Tên phim hoặc mã phim đã tồn tại`);
    } else {
      next();
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const checkMovieIdExist = (Module) => async (req, res, next) => {
  const { id } = req.params;
  try {
    const detail = await Module.findOne({ where: { id } });
    if (detail) {
      next();
    } else {
      res.status(404).send(`Phim Không tìm thấy`);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const checkDateCreateMovie = (req, res, next) => {
  const { ngayKhoiChieu } = req.body;
  let newNgayKhoiChieu = new Date(ngayKhoiChieu);
  if (newNgayKhoiChieu != "Invalid Date") {
    next();
  } else {
    let new_date = momentjs(ngayKhoiChieu, "DD.MM.YYYY");
    let dayToString = new_date.toString();
    if (dayToString != "Invalid date") {
      next();
    } else {
      res.status(444).send("Vui Lòng Điền Đúng Ngày Tháng");
    }
  }
};
const checkMaPhimIdBookingMovieRouter = (Model) => async (req, res, next) => {
  const { maPhim } = req.query;
  try {
    const index = await Model.findOne({
      where: {
        maPhim,
      },
    });
    if (index) {
      next();
    } else {
      res.status(404).send({ Message: "Id Of Film Not Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  checkMaPhimExist,
  checkMovieExist,
  checkMovieIdExist,
  checkDateCreateMovie,
  checkMaPhimIdBookingMovieRouter,
};
