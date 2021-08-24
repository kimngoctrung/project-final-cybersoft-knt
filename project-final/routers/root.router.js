const express = require("express");
const { authRouter } = require("../routers/login va register/auth.router");
const { bookingRouter } = require("./bookingRouter/bookingRouter");
const { routerLogin } = require("../routers/login va register/login.roter");
const { movieRouter } = require("./movie/movie.router");
const { userRouter } = require("./user.routers");
const { cineplexRouter } = require("./Cineplex/cineplex.router");
const { cinemaRouter } = require("./Cinema/cinema.router");
const { listShowFilmRouter } = require("./lichChieuPhim/listShowFilm.router");
const rootRouter = express.Router();
rootRouter.use("/users", userRouter);
rootRouter.use("/resgister", authRouter);
rootRouter.use("/login", routerLogin);
rootRouter.use("/movie", movieRouter);
rootRouter.use("/booking", bookingRouter);
rootRouter.use("/cineplex", cineplexRouter);
rootRouter.use("/cinema", cinemaRouter);
rootRouter.use("/lichchieu", listShowFilmRouter);
module.exports = {
  rootRouter,
};
