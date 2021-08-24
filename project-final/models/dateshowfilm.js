"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DateShowFilm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cinema }) {
      // define association here
      this.belongsTo(Cinema, {
        cinemaId: "dateShowFilmId",
      });
    }
  }
  DateShowFilm.init(
    {
      cinemaId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DateShowFilm",
    }
  );
  return DateShowFilm;
};
