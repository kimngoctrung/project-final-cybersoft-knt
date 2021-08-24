const {
  Movie,
  sequelize,
  User,
  Cinema,
  ShowTime,
  DateShowFilm,
  Seat,
  Cineplex,
} = require("../../models");
const dateFormat = require("dateformat");
const momentjs = require("moment");
const createMovie = async (req, res) => {
  const {
    maPhim,
    tenPhim,
    biDanh,
    trailer,
    hinhAnh,
    moTa,
    ngayKhoiChieu,
    danhGia,
  } = req.body;
  let newNgayKhoiChieu = new Date(ngayKhoiChieu);
  if (newNgayKhoiChieu != "Invalid Date") {
    let dateAfterChange = dateFormat(ngayKhoiChieu, "isoDate");
    try {
      const newMovie = await Movie.create({
        maPhim,
        tenPhim,
        biDanh,
        trailer,
        hinhAnh,
        moTa,
        ngayKhoiChieu: dateAfterChange,
        danhGia,
      });
      res.status(200).send(newMovie);
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    let new_date = momentjs(ngayKhoiChieu, "DD.MM.YYYY");
    let dayToString = new_date.toString();
    let dateAfterChange = dateFormat(dayToString, "isoDate");
    try {
      const newMovie = await Movie.create({
        maPhim,
        tenPhim,
        biDanh,
        trailer,
        hinhAnh,
        moTa,
        ngayKhoiChieu: dateAfterChange,
        danhGia,
      });
      res.status(200).send(newMovie);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};
const uploadImages = async (req, res) => {
  const { file } = req;
  const { id } = req.params;
  const urlIMG = "http://localhost:3000/" + file.path;
  /**
   * lưu link hình xuống database
   */
  try {
    const movieDetail = await Movie.findByPk(id);
    movieDetail.hinhAnh = urlIMG;
    await movieDetail.save();
    res.send(movieDetail);
  } catch (err) {
    res.send(err);
  }
};
const createMoviceAndUploadImage = async (req, res) => {
  const { maPhim, tenPhim, biDanh, trailer, moTa, ngayKhoiChieu, danhGia } =
    req.body;
  const { file } = req;
  const urlIMG = "http://localhost:1010/" + file.path;
  let newNgayKhoiChieu = new Date(ngayKhoiChieu);
  if (newNgayKhoiChieu != "Invalid Date") {
    let dateAfterChange = dateFormat(ngayKhoiChieu, "isoDate");
    try {
      const newMovie = await Movie.create({
        maPhim,
        tenPhim,
        biDanh,
        trailer,
        hinhAnh: urlIMG,
        moTa,
        ngayKhoiChieu: dateAfterChange,
        danhGia,
      });
      res.status(200).send(newMovie);
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    let new_date = momentjs(ngayKhoiChieu, "DD.MM.YYYY");
    let dayToString = new_date.toString();
    let dateAfterChange = dateFormat(dayToString, "isoDate");
    try {
      const newMovie = await Movie.create({
        maPhim,
        tenPhim,
        biDanh,
        trailer,
        hinhAnh: urlIMG,
        moTa,
        ngayKhoiChieu: dateAfterChange,
        danhGia,
      });
      res.status(200).send(newMovie);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { maPhim, tenPhim, biDanh, trailer, moTa, ngayKhoiChieu, danhGia } =
    req.body;
  let newNgayKhoiChieu = new Date(ngayKhoiChieu);
  if (newNgayKhoiChieu != "Invalid Date") {
    let dateAfterChange = dateFormat(ngayKhoiChieu, "isoDate");
    try {
      await Movie.update(
        {
          maPhim,
          tenPhim,
          biDanh,
          trailer,
          moTa,
          ngayKhoiChieu: dateAfterChange,
          danhGia,
        },
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
  } else {
    let new_date = momentjs(ngayKhoiChieu, "DD.MM.YYYY");
    let dayToString = new_date.toString();
    let dateAfterChange = dateFormat(dayToString, "isoDate");
    try {
      await Movie.update(
        {
          maPhim,
          tenPhim,
          biDanh,
          trailer,
          moTa,
          ngayKhoiChieu: dateAfterChange,
          danhGia,
        },
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
  }
};
const updateMovieAndImages = async (req, res) => {
  const { id } = req.params;
  const { maPhim, tenPhim, biDanh, trailer, moTa, ngayKhoiChieu, danhGia } =
    req.body;
  const { file } = req;
  const urlIMG = "http://localhost:1010/" + file.path;
  let newNgayKhoiChieu = new Date(ngayKhoiChieu);
  if (newNgayKhoiChieu != "Invalid Date") {
    let dateAfterChange = dateFormat(ngayKhoiChieu, "isoDateTime");
    try {
      await Movie.update(
        {
          maPhim,
          tenPhim,
          biDanh,
          hinhAnh: urlIMG,
          trailer,
          moTa,
          ngayKhoiChieu: dateAfterChange,
          danhGia,
        },
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
  } else {
    let new_date = momentjs(ngayKhoiChieu, "DD.MM.YYYY");
    let dayToString = new_date.toString();
    let dateAfterChange = dateFormat(dayToString, "isoDate");
    try {
      await Movie.update(
        {
          maPhim,
          tenPhim,
          biDanh,
          hinhAnh: urlIMG,
          trailer,
          moTa,
          ngayKhoiChieu: dateAfterChange,
          danhGia,
        },
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
  }
};
const getListMovie = async (req, res) => {
  let { page, size } = req.query;
  page = parseInt(page);
  size = parseInt(size);
  if (page > -1 && size > 0) {
    try {
      const movieList = await Movie.findAll({
        offset: page,
        limit: size,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      const total = await Movie.count({});
      movieList.unshift({ tongSoLuong: total });
      res.status(200).send(movieList);
    } catch (err) {
      res.status(500).send(err);
    }
  } else if (page > -1) {
    try {
      const movieList = await Movie.findAll({
        offset: page,
        limit: 4,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      const total = await Movie.count({});
      movieList.unshift({ tongSoLuong: total });
      res.status(200).send(movieList);
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    try {
      const total = await Movie.count({});
      const movieList = await Movie.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      movieList.unshift({ tongSoLuong: total });
      res.status(200).send(movieList);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
const getListMovieByDay = async (req, res) => {
  let { tuNgay, denNgay, page, size } = req.query;
  let tuNgayNewDate = new Date(tuNgay);
  let denNgayNewDate = new Date(denNgay);
  let tongSoLuong = 0;
  if (tuNgayNewDate === "Invalid Date" && denNgayNewDate === "Invalid Date") {
    //========** CONVERT tuNgay **========//
    let fromDay = momentjs(tuNgay, "DD.MM.YYYY");
    let formDayToString = fromDay.toString();
    let fromDayFormat = dateFormat(formDayToString, "isoDate");
    //========** CONVERT denNgay **========//
    let toDay = momentjs(denNgay, "DD.MM.YYYY");
    let toDayToString = toDay.toString();
    let toDayFormat = dateFormat(toDayToString, "isoDate");
    if (page != undefined && size == undefined) {
      try {
        const [result] = await sequelize.query(`
          select id,maPhim,tenPhim,biDanh,trailer,hinhAnh,moTa,ngayKhoiChieu,danhGia from movies where ngayKhoiChieu between "${fromDayFormat}" and "${toDayFormat}" limit ${page}, 5 ;
              `);
        const [result2] = await sequelize.query(`
    select * from movies where ngayKhoiChieu between "${fromDayFormat}" and "${toDayFormat}" ;
        `);
        result.unshift({ tongSoLuong: result2.length });

        res.status(200).send(result);
      } catch (err) {
        res.status(500).send(err);
      }
    } else if (page != undefined && size != undefined) {
      try {
        const [result] = await sequelize.query(`
            select id,maPhim,tenPhim,biDanh,trailer,hinhAnh,moTa,ngayKhoiChieu,danhGia from movies where ngayKhoiChieu between "${fromDayFormat}" and "${toDayFormat}" limit ${page},${size} ;
                `);
        const [result2] = await sequelize.query(`
                select * from movies where ngayKhoiChieu between "${fromDayFormat}" and "${toDayFormat}" ;
                    `);
        result.unshift({ tongSoLuong: result2.length });

        res.status(200).send(result);
      } catch (err) {
        res.status(500).send(err);
      }
    } else {
      try {
        const [result] = await sequelize.query(`
            select id,maPhim,tenPhim,biDanh,trailer,hinhAnh,moTa,ngayKhoiChieu,danhGia from movies where ngayKhoiChieu between "${fromDayFormat}" and "${toDayFormat}" ;
              `);
        result.unshift({ tongSoLuong: result.length });
        res.status(200).send({ result, tongSoLuong });
      } catch (err) {
        res.status(500).send(err);
      }
    }
  } else {
    let fromDayFormat = dateFormat(tuNgay, "isoDate");
    let toDayFormat = dateFormat(denNgay, "isoDate");
    if (page != undefined && size == undefined) {
      try {
        const [result] = await sequelize.query(`
          select id,maPhim,tenPhim,biDanh,trailer,hinhAnh,moTa,ngayKhoiChieu,danhGia from movies where ngayKhoiChieu between "${fromDayFormat}" and "${toDayFormat}" limit ${page}, 5 ;
              `);
        const [result2] = await sequelize.query(`
    select * from movies where ngayKhoiChieu between "${fromDayFormat}" and "${toDayFormat}" ;
        `);
        result.unshift({ tongSoLuong: result2.length });

        res.status(200).send(result);
      } catch (err) {
        res.status(500).send(err);
      }
    } else if (page != undefined && size != undefined) {
      try {
        const [result] = await sequelize.query(`
            select id,maPhim,tenPhim,biDanh,trailer,hinhAnh,moTa,ngayKhoiChieu,danhGia from movies where ngayKhoiChieu between "${fromDayFormat}" and "${toDayFormat}" limit ${page},${size} ;
                `);
        const [result2] = await sequelize.query(`
                select * from movies where ngayKhoiChieu between "${fromDayFormat}" and "${toDayFormat}" ;
                    `);
        result.unshift({ tongSoLuong: result2.length });

        res.status(200).send(result);
      } catch (err) {
        res.status(500).send(err);
      }
    } else {
      try {
        const [result] = await sequelize.query(`
            select id,maPhim,tenPhim,biDanh,trailer,hinhAnh,moTa,ngayKhoiChieu,danhGia from movies where ngayKhoiChieu between "${fromDayFormat}" and "${toDayFormat}" ;
              `);
        result.unshift({ tongSoLuong: result.length });
        res.status(200).send({ result, tongSoLuong });
      } catch (err) {
        res.status(500).send(err);
      }
    }
  }
};
const removeMovieController = async (req, res) => {
  const { id } = req.params;
  try {
    await Movie.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("xóa thành công");
  } catch (err) {
    res.status(400).send(err);
  }
};
const getScheduleDetailMovie = async (req, res) => {
  const { maPhim } = req.query;
  try {
    const movie = await Movie.findOne({
      where: { maPhim },
    });
    const { id } = movie;
    const listTicket = await DateShowFilm.findOne({
      where: { movieId: id },
      attributes: [],
      include: [
        {
          model: Cinema,
          attributes: ["nameCinema", "addressCinema"],
          include: [
            {
              model: Movie,
              through: { attributes: [] },
              attributes: ["tenPhim", "maPhim", "hinhAnh", "ngayKhoiChieu"],
            },
            {
              model: ShowTime,
              attributes: ["startTime"],
              include: [
                {
                  model: Seat,
                  attributes: ["statusSeat", "price", "nameSeat"],
                },
              ],
            },
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
  createMovie,
  uploadImages,
  createMoviceAndUploadImage,
  updateMovie,
  updateMovieAndImages,
  getListMovie,
  getListMovieByDay,
  removeMovieController,
  getScheduleDetailMovie,
};
