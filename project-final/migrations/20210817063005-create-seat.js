"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Seats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameSeat: {
        type: Sequelize.STRING,
      },
      statusSeat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      price: {
        type: Sequelize.STRING,
      },
      typeSeat: {
        type: Sequelize.ENUM,
        values: ["Vip", "Normal"],
      },
      showTimeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "ShowTimes",
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
    await queryInterface.dropTable("Seats");
  },
};
