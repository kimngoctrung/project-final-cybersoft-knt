"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DanhSachRap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cinema }) {
      // define association here
      this.belongsTo(Cinema, {
        foreignKey: "cinemaId",
      });
    }
  }
  DanhSachRap.init(
    {
      tenRap: DataTypes.STRING,
      maRap: DataTypes.INTEGER,
      cinemaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DanhSachRap",
    }
  );
  return DanhSachRap;
};
