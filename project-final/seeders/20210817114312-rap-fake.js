"use strict";
let arrRap = [];
for (let i = 1; i < 11; i++) {
  let keyRap = {
    id: i,
    maRap: 450 + i,
    tenRap: `Rạp ${i}`,
    cinemaId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  let keyRap2 = {
    id: 10 + i,
    maRap: 460 + i,
    tenRap: `Rạp ${10 + i}`,
    cinemaId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  arrRap.push(keyRap);
  arrRap.push(keyRap2);
  arrRap.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
}

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
    await queryInterface.bulkInsert("DanhSachRaps", arrRap, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("DanhSachRaps", null, {});
  },
};
