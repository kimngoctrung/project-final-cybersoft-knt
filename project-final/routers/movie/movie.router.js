const express = require("express");
const {
  createMovie,
  uploadImages,
  createMoviceAndUploadImage,
  updateMovie,
  updateMovieAndImages,
  getListMovie,
  getListMovieByDay,
  removeMovieController,
  getScheduleDetailMovie,
} = require("../../controller/movie/movie.controller");
const {
  authenticate,
  authorize,
} = require("../../middleware/auth/verify-token.middleware");
const {
  uploadImageSignle,
} = require("../../middleware/uploadImg/uploadImg.middleware");
const {
  checkMovieExist,
  checkMovieIdExist,
  checkDateCreateMovie,
  checkMaPhimExist,
  checkMaPhimIdBookingMovieRouter,
} = require("../../middleware/validations/movie.validations");
const { Movie } = require("../../models");
const movieRouter = express.Router();
movieRouter.post(
  "/addmovie",
  authenticate,
  authorize("ADMIN"),
  checkDateCreateMovie,
  checkMaPhimExist(Movie),
  checkMovieExist(Movie),
  createMovie
);
movieRouter.post(
  "/uploadimage/:id",
  authenticate,
  authorize("ADMIN"),
  checkMovieIdExist(Movie),
  uploadImageSignle(),
  uploadImages
);
movieRouter.post(
  "/addandupload",
  authenticate,
  authorize("ADMIN"),
  checkMovieExist(Movie),
  uploadImageSignle(),
  createMoviceAndUploadImage
);
movieRouter.post(
  "/updatemovie/:id",
  checkMovieIdExist(Movie),
  authenticate,
  authorize("ADMIN"),
  updateMovie
);
movieRouter.post(
  "/updatemovieandimg/:id",
  checkMovieIdExist(Movie),
  authenticate,
  authorize("ADMIN"),
  uploadImageSignle(),
  updateMovieAndImages
);
movieRouter.get("/getlist", getListMovie);
movieRouter.get("/getlist/panigation", getListMovie);
movieRouter.get("/getlistmoviebyday", getListMovieByDay);
movieRouter.delete(
  "/removemovie/:id",
  checkMovieIdExist(Movie),
  authenticate,
  authorize("ADMIN"),
  removeMovieController
);
movieRouter.get(
  "/getscheduledetail",
  checkMaPhimIdBookingMovieRouter(Movie),
  getScheduleDetailMovie
);

module.exports = {
  movieRouter,
};
