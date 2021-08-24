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
      "Seats",
      [
        {
          id: 1,
          nameSeat: "Vip 1",
          price: "120000vnd",
          typeSeat: "vip",
          showTimeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          nameSeat: "Vip 2",
          price: "120000vnd",
          typeSeat: "vip",
          showTimeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          nameSeat: "Vip 3",
          price: "120000vnd",
          typeSeat: "vip",
          showTimeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          nameSeat: "Vip 4",
          price: "120000vnd",
          typeSeat: "vip",
          showTimeId: 2,
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
    await queryInterface.bulkDelete("Seats", null, {});
  },
};
