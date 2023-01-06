'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Photos', [{
    title: 'User Id 1 Photo Jadul',
    caption: "anything",
    image_url: "https://photojadul.com",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    title: 'User Id 1 Photo Kenangan',
    caption: "anything",
    image_url: "https://photokenangan.com",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    title: 'User Id 1 Photo Liburan',
    caption: "anything",
    image_url: "https://photoliburan.com",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    title: 'User Id 1 Photo Malming',
    caption: "anything",
    image_url: "https://photomalming.com",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
