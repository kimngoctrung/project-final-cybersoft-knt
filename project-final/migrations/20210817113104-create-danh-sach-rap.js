"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DanhSachRaps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tenRap: {
        type: Sequelize.STRING,
      },
      maRap: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("DanhSachRaps");
  },
};
