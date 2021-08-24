"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cineplex, DanhSachRap, ShowTime, Movie, DateShowFilm }) {
      // define association here
      this.belongsTo(Cineplex, {
        foreignKey: "cineplexId",
      });
      this.hasMany(DanhSachRap, {
        foreignKey: "cinemaId",
      });
      this.hasMany(ShowTime, {
        foreignKey: "cinemaId",
      });
      this.belongsToMany(Movie, {
        foreignKey: "movieId",
        through: "DateShowFilms",
      });
      this.hasOne(DateShowFilm, {
        foreignKey: "cinemaId",
      });
    }
  }
  Cinema.init(
    {
      nameCinema: DataTypes.STRING,
      addressCinema: DataTypes.STRING,
      imageCinema: DataTypes.STRING,
      cineplexId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cinema",
    }
  );
  return Cinema;
};
