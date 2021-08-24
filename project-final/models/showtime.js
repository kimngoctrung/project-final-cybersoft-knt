"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShowTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cinema, Seat }) {
      // define association here
      this.belongsTo(Cinema, {
        foreignKey: "cinemaId",
      });
      this.hasMany(Seat, {
        foreignKey: "showTimeId",
      });
    }
  }
  ShowTime.init(
    {
      maLichChieu: DataTypes.STRING,
      startTime: DataTypes.STRING,
      cinemaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ShowTime",
    }
  );
  return ShowTime;
};
