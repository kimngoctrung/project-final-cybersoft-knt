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
      "Cineplexes",
      [
        {
          id: 1,
          nameCineplex: "BHDStar",
          createdAt: new Date(),
          updatedAt: new Date(),
          logoCineplex:
            "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
        },
        {
          id: 2,
          nameCineplex: "CGV",
          createdAt: new Date(),
          updatedAt: new Date(),
          logoCineplex: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
        },
        {
          id: 3,
          nameCineplex: "CineStar",
          createdAt: new Date(),
          updatedAt: new Date(),
          logoCineplex:
            "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
        },
        {
          id: 4,
          nameCineplex: "Galaxy",
          createdAt: new Date(),
          updatedAt: new Date(),
          logoCineplex:
            "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
        },
        {
          id: 5,
          nameCineplex: "LotteCinima",
          createdAt: new Date(),
          updatedAt: new Date(),
          logoCineplex:
            "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
        },
        {
          id: 6,
          nameCineplex: "MegaGS",
          createdAt: new Date(),
          updatedAt: new Date(),
          logoCineplex: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
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
    await queryInterface.bulkDelete("Cineplexes", null, {});
  },
};
