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
      "Cinemas",
      [
        {
          id: 1,
          nameCinema: "BHD 3-2",
          addressCinema: "110 3/2 Quận 10",
          imageCinema: "dsahdjsadsadsa.png",
          cineplexId: 1,
          createdAt: "2021-12-04 21:13:59",
          updatedAt: "2021-12-04 22:13:59",
        },
        {
          id: 2,
          nameCinema: "BHD Star Vincom Thảo Điền",
          addressCinema: "L5-Megamall, 159 XL Hà Nội, Q.2",
          imageCinema: "dsahdjsadsadsa.png",
          cineplexId: 1,
          createdAt: "2021-12-04 21:13:59",
          updatedAt: "2021-12-04 22:13:59",
        },
        {
          id: 3,
          nameCinema: "BHD Star ‎Phạm Hùng",
          addressCinema: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
          imageCinema: "dsahdjsadsadsa.png",
          cineplexId: 1,
          createdAt: "2021-12-04 21:13:59",
          updatedAt: "2021-12-04 22:13:59",
        },
        {
          id: 4,
          nameCinema: "BHD Star Vincom Quang Trung",
          addressCinema: "B1-Vincom QT, 190 Quang Trung, Gò Vấp",
          imageCinema: "dsahdjsadsadsa.png",
          cineplexId: 1,
          createdAt: "2021-12-04 21:13:59",
          updatedAt: "2021-12-04 22:13:59",
        },
        {
          id: 5,
          nameCinema: "BHD Star Bitexco",
          addressCinema: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
          imageCinema: "dsahdjsadsa223dsa.png",
          cineplexId: 1,
          createdAt: "2021-12-04 21:13:59",
          updatedAt: "2021-12-04 23:13:59",
        },
        {
          id: 6,
          nameCinema: "CineStar Hai Bà Trưng",
          addressCinema: "135 Hai Bà Trưng, Bến Nghé, Q.1",
          imageCinema: "dsahdjsadsa223dsa.png",
          cineplexId: 2,
          createdAt: "2021-12-04 21:13:59",
          updatedAt: "2021-12-04 23:13:59",
        },
        {
          id: 7,
          nameCinema: "CineStar Quốc Thanh",
          addressCinema: "271 Nguyễn Trãi, Q.1",
          imageCinema: "dsahdjsadsa223dsa.png",
          cineplexId: 2,
          createdAt: "2021-12-04 21:13:59",
          updatedAt: "2021-12-04 23:13:59",
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
    await queryInterface.bulkDelete("Cinemas", null, {});
  },
};
