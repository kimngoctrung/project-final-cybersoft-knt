const express = require("express");
const {
  getListCineplex,
} = require("../../controller/cineplex/cineplex.controller");
const cineplexRouter = express.Router();
cineplexRouter.get("/getlist", getListCineplex);
module.exports = {
  cineplexRouter,
};
