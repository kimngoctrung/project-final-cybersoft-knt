const express = require("express");
const { Cinema, Cineplex } = require("../../models");
const {
  getListCinemaBySystem,
  getListCinema,
} = require("../../controller/cinema/cinema.controller");
const {
  checkNameCinema,
  checkNameCineplex,
} = require("../../middleware/validations/cinema.validations");
const cinemaRouter = express.Router();
cinemaRouter.get(
  "/getlist-bykeyword",
  checkNameCineplex(Cineplex),
  getListCinemaBySystem
);
cinemaRouter.get("/getlist", getListCinema);
module.exports = {
  cinemaRouter,
};
