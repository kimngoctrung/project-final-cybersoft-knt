"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ShowTimes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      maLichChieu: {
        type: Sequelize.STRING,
      },
      startTime: {
        type: Sequelize.STRING,
      },
      cinemaId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Cinemas",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ShowTimes");
  },
};
