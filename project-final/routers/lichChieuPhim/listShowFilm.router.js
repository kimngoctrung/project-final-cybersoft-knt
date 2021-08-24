const express = require("express");
const { Movie } = require("../../models");
const {
  getListShowFilmByCineplex,
  getListShowFilmByMovie,
} = require("../../controller/cinema/cinema.controller");
const {
  checkMaPhimIdBookingMovieRouter,
} = require("../../middleware/validations/movie.validations");
const listShowFilmRouter = express.Router();
listShowFilmRouter.get("/getlistshow", getListShowFilmByCineplex);
listShowFilmRouter.get(
  "/getlistshowbymovie",
  checkMaPhimIdBookingMovieRouter(Movie),
  getListShowFilmByMovie
);
module.exports = {
  listShowFilmRouter,
};
