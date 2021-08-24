const dateFormat = require("dateformat");
const momentjs = require("moment");
const checkIdFilmBooking = (Model) => async (req, res, next) => {
  const { maPhim } = req.body;
  try {
    const index = await Model.findOne({
      where: {
        maPhim,
      },
    });
    if (index) {
      next();
    } else {
      res.status(404).send({ Message: "Id Not Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const checkDate = async (req, res, next) => {
  const { ngayChieuGioChieu } = req.body;
  let newDate = new Date(ngayChieuGioChieu);
  let checkHour = ngayChieuGioChieu.split(" ");
  if (checkHour[1] === undefined) {
    res.status(512).send({ Message: "Please Fill The Hour Show Film" });
  } else {
    if (newDate != "Invalid Date") {
      next();
    } else {
      let newNgayChieuGioChieu = momentjs(
        ngayChieuGioChieu,
        "DD.MM.YYYY hh:mm:ss"
      );
      let newParameTon = new Date(newNgayChieuGioChieu);
      if (newParameTon != "Invalid Date") {
        next();
      } else {
        res.status(512).send({ Message: "Invalid Date" });
      }
    }
  }
};
const checkEmtyScheduleMovie = async (req, res, next) => {
  const { maPhim, ngayChieuGioChieu, maRap, giaVe } = req.body;
  if (maPhim && ngayChieuGioChieu && maRap && giaVe) {
    next();
  } else {
    res.status(400).send({
      message: "Vui lòng điền maPhim, ngayChieuGioChieu, maRap, giaVe",
    });
  }
};
const checkExistDateBooking = (Model) => async (req, res, next) => {
  const { ngayChieuGioChieu, maRap } = req.body;
  let newDate = new Date(ngayChieuGioChieu);
  if (newDate != "Invalid Date") {
    const newDateFormat = dateFormat(newDate, "isoDateTime");
    const [indexDate] = await Model.query(`
    select maRap,startTime from cinemas
    inner join danhsachraps on cinemas.id=danhsachraps.cinemaId
    inner join showtimes on cinemas.id=showtimes.cinemaId where startTime = '${newDateFormat}'
    `);
    const index = indexDate.findIndex((item) => item.maRap === maRap);
    if (index != -1) {
      res.status(512).send({ Message: "Times Is Exist" });
    } else {
      next();
    }
  } else {
    let newNgayChieuGioChieu = momentjs(
      ngayChieuGioChieu,
      "DD.MM.YYYY hh:mm:ss"
    );
    let newNewNgay = new Date(newNgayChieuGioChieu);
    if (newNewNgay != "Invalid Date") {
      const formatNgayChieu = dateFormat(newNewNgay, "isoDateTime");
      const [indexDate] = await Model.query(`
          select maRap,startTime from cinemas
          inner join danhsachraps on cinemas.id=danhsachraps.cinemaId
          inner join showtimes on cinemas.id=showtimes.cinemaId where startTime = '${formatNgayChieu}'
          `);
      const index = indexDate.findIndex((item) => item.maRap == maRap);
      if (index != -1) {
        res.status(512).send({ Message: "Times Is Exist" });
      } else {
        next();
      }
    } else {
      res.status(444).send({ Message: "Invalid Date" });
    }
  }
};
const checkEmtyIdCreateBooking = (req, res, next) => {
  const { danhSachVe, maLichChieu } = req.body;
  const { maGhe, giaVe } = danhSachVe[0];
  if ((maLichChieu, maGhe, giaVe)) {
    next();
  } else {
    res
      .status(412)
      .send({ message: "Vui lòng điền đầy đủ maGhe,giaVe,maLichChieu" });
  }
};
const checkIdToCreateBookingMovie = (Model) => async (req, res, next) => {
  const { maLichChieu } = req.body;
  try {
    const detail = await Model.findOne({
      where: {
        maLichChieu,
      },
    });
    if (detail) {
      next();
    } else {
      res.status(404).send({ Message: "Không tìm thấy mã lịch chiếu" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const checkUserBookingMovie = (Model) => async (req, res, next) => {
  const { taiKhoan } = req.body;
  try {
    const detail = await Model.findOne({
      where: {
        taiKhoan,
      },
    });
    if (detail) {
      next();
    } else {
      res.status(404).send({ Message: "Không tìm thấy Tài Khoản" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  checkIdFilmBooking,
  checkDate,
  checkExistDateBooking,
  checkEmtyScheduleMovie,
  checkEmtyIdCreateBooking,
  checkIdToCreateBookingMovie,
  checkUserBookingMovie,
};
