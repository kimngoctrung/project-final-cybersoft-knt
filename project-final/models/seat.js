"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ShowTime }) {
      // define association here
      this.belongsTo(ShowTime, {
        foreignKey: "showTimeId",
      });
    }
  }
  Seat.init(
    {
      nameSeat: DataTypes.STRING,
      statusSeat: DataTypes.BOOLEAN,
      price: DataTypes.STRING,
      typeSeat: DataTypes.ENUM(["Vip", "normal"]),
      showTimeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Seat",
    }
  );
  return Seat;
};
