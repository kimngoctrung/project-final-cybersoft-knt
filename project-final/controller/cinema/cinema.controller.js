const {
  Cineplex,
  DanhSachRap,
  Cinema,
  Movie,
  DateShowFilm,
  ShowTime,
  Seat,
  sequelize,
} = require("../../models");

const getListCinemaBySystem = async (req, res) => {
  const { nameCineplex } = req.query;
  try {
    const cinemaList = await Cineplex.findOne({
      attributes: ["nameCineplex", "logoCineplex"],
      where: { nameCineplex },
      through: { attributes: [] },
      include: [
        {
          model: Cinema,
          attributes: {
            exclude: ["id", "createdAt", "updatedAt", "cineplexId"],
          },
          include: [
            {
              model: DanhSachRap,
              attributes: {
                exclude: ["id", "createdAt", "updatedAt", "cinemaId"],
              },
            },
          ],
        },
      ],
    });
    res.status(200).send(cinemaList);
  } catch (err) {
    res.status(500).send(err);
  }
};
const getListCinema = async (req, res) => {
  const { nameCineplex } = req.query;
  try {
    const cinemaList = await Cineplex.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: { nameCineplex },
      include: [
        {
          model: Cinema,
          attributes: { exclude: ["cineplexId", "createdAt", "updatedAt"] },
          include: [
            {
              model: DanhSachRap,
              attributes: { exclude: ["cinemaId", "createdAt", "updatedAt"] },
            },
          ],
          right: true,
        },
      ],
    });
    res.status(200).send(cinemaList);
  } catch (err) {
    res.status(500).send(err);
  }
};
const getListShowFilmByCineplex = async (req, res) => {
  const { nameCineplex } = req.query;
  try {
    const listShowFilm = await Cineplex.findOne({
      where: {
        nameCineplex,
      },
      attributes: [],

      include: [
        {
          attributes: {
            exclude: ["cineplexId", "id", "createdAt", "updatedAt"],
          },
          model: Cinema,
          include: [
            {
              attributes: { exclude: ["id", "createdAt", "updatedAt"] },
              model: Movie,
              through: { attributes: [] },
            },
            { attributes: ["maRap", "tenRap"], model: DanhSachRap },
            {
              attributes: ["startTime", "maLichChieu"],
              model: ShowTime,

              include: [
                {
                  attributes: {
                    exclude: ["id", "showTimeId", "createdAt", "updatedAt"],
                  },
                  model: Seat,
                },
              ],
            },
          ],
        },
      ],
    });

    res.status(200).send({ listShowFilm });
  } catch (err) {
    res.status(500).send(err);
  }
};
const getListShowFilmByMovie = async (req, res) => {
  const { maPhim } = req.query;
  try {
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
    res.status(200).send(listShowFilm);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  getListCinemaBySystem,
  getListCinema,
  getListShowFilmByCineplex,
  getListShowFilmByMovie,
};
