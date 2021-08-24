"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cinemas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameCinema: {
        type: Sequelize.STRING,
      },
      addressCinema: {
        type: Sequelize.STRING,
      },
      imageCinema: {
        type: Sequelize.STRING,
      },
      cineplexId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Cineplexes",
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
    await queryInterface.dropTable("Cinemas");
  },
};
