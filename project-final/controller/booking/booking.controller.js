const {
  Ticket,
  User,
  Movie,
  DanhSachRap,
  Seat,
  DateShowFilm,
  ShowTime,
  Cinema,
  sequelize,
} = require("../../models");
const dateFormat = require("dateformat");
const momentjs = require("moment");
const bookingController = async (req, res) => {
  const { danhSachVe, taiKhoan, maLichChieu } = req.body;
  try {
    const detail = await ShowTime.findOne({
      where: {
        maLichChieu,
      },
    });
    const showTimeId = detail.id;
    const userBooking = await User.findOne({
      where: {
        taiKhoan,
      },
    });
    const { id } = userBooking;
    const { movieId, cinemaId } = detail;
    await Ticket.create({
      movieId,
      userId: id,
    });
    for (let key of danhSachVe)
      if (parseInt(key.giaVe) === parseInt("120000vnd")) {
        await Seat.create({
          cinemaId,
          typeSeat: "Vip",
          nameSeat: key.maGhe,
          statusSeat: true,
          price: key.giaVe,
          showTimeId,
        });
      } else {
        await Seat.create({
          cinemaId,
          typeSeat: "Normal",
          nameSeat: key.maGhe,
          statusSeat: true,
          price: key.giaVe,
          showTimeId,
        });
      }
    res.status(200).send({ message: "Successfull" });
  } catch (err) {
    res.status(500).send(err);
  }
};
const createmMovieSchedule = async (req, res) => {
  const { maPhim, ngayChieuGioChieu, maRap, giaVe } = req.body;
  let newDateOne = new Date(ngayChieuGioChieu);
  try {
    if (newDateOne != "Invalid Date") {
      const formatNgayChieu = dateFormat(newDateOne, "isoDateTime");
      const newSchedule = Date.now();
      const movieSearch = await Movie.findOne({
        where: {
          maPhim,
        },
      });
      const movieId = movieSearch.id;
      ////========= cinemaId ===========////
      const rapSearch = await DanhSachRap.findOne({
        where: {
          maRap,
        },
      });
      let cinemaId = rapSearch.cinemaId;
      const maLichChieuFilm = await ShowTime.create({
        startTime: formatNgayChieu,
        cinemaId,
        maLichChieu: newSchedule,
      });
      await DanhSachRap.create({
        maRap,
        cinemaId,
      });
      await DateShowFilm.create({
        movieId,
        cinemaId,
      });
      res.status(200).send(maLichChieuFilm);
    } else {
      let newNgayChieuGioChieu = momentjs(
        ngayChieuGioChieu,
        "DD.MM.YYYY hh:mm:ss"
      );
      const newSchedule = Date.now();
      const formatNgayChieu = dateFormat(newNgayChieuGioChieu, "isoDateTime");
      ////========= movieId ===========////
      const movieSearch = await Movie.findOne({
        where: {
          maPhim,
        },
      });
      const movieId = movieSearch.id;
      ////========= cinemaId ===========////
      const rapSearch = await DanhSachRap.findOne({
        where: {
          maRap,
        },
      });
      let cinemaId = rapSearch.cinemaId;
      const newShowTime = await ShowTime.create({
        startTime: formatNgayChieu,
        cinemaId,
        maLichChieu: newSchedule,
      });
      await DanhSachRap.create({
        maRap,
        cinemaId,
      });
      await DateShowFilm.create({
        movieId,
        cinemaId,
      });
      await Seat.create({
        price: giaVe,
        showTimeId: newShowTime.id,
      });
      res.status(200).send(newShowTime);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const getListTicketBooked = async (req, res) => {
  const { maLichChieu } = req.query;
  try {
    const listTicket = await Cinema.findOne({
      attributes: ["nameCinema", "addressCinema"],
      include: [
        {
          model: Movie,
          through: { attributes: [] },
          attributes: ["tenPhim", "maPhim", "hinhAnh", "ngayKhoiChieu"],
        },
        {
          model: ShowTime,
          where: { maLichChieu },
          attributes: ["startTime"],
          include: [
            { model: Seat, attributes: ["statusSeat", "price", "nameSeat"] },
          ],
        },
      ],
    });
    res.status(200).send(listTicket);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  bookingController,
  createmMovieSchedule,
  getListTicketBooked,
};
