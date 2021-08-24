"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "ShowTimes",
      [
        {
          id: 1,
          startTime: "2019-01-01",
          cinemaId: 1,
          maLichChieu: 16101,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          startTime: "2019-01-01",
          cinemaId: 1,
          maLichChieu: 16102,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          startTime: "2019-01-01",
          cinemaId: 2,
          maLichChieu: 16103,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          startTime: "2019-01-01",
          cinemaId: 2,
          maLichChieu: 16104,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("ShowTimes", null, {});
  },
};
