const express = require("express");
const { Movie, sequelize, ShowTime, User } = require("../../models");
const {
  bookingController,
  createmMovieSchedule,
  getListTicketBooked,
} = require("../../controller/booking/booking.controller");
const {
  authenticate,
  authorize,
} = require("../../middleware/auth/verify-token.middleware");
const {
  checkIdFilmBooking,
  checkDate,
  checkExistDateBooking,
  checkEmtyScheduleMovie,
  checkEmtyIdCreateBooking,
  checkIdToCreateBookingMovie,
  checkUserBookingMovie,
} = require("../../middleware/validations/booking.validation");
const bookingRouter = express.Router();
bookingRouter.post(
  "/",
  authenticate,
  checkEmtyIdCreateBooking,
  checkIdToCreateBookingMovie(ShowTime),
  checkUserBookingMovie(User),
  bookingController
);
bookingRouter.post(
  "/createschedule",
  authenticate,
  authorize("admin"),
  checkEmtyScheduleMovie,
  checkIdFilmBooking(Movie),
  checkDate,
  checkExistDateBooking(sequelize),
  createmMovieSchedule
);
bookingRouter.get("/getlistticket", getListTicketBooked);

module.exports = {
  bookingRouter,
};
