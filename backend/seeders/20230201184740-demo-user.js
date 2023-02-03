"use strict";

const { randUser } = require("@ngneat/falso");
const { hashPassword } = require("../utils");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      // Insert admin account
      {
        firstname: "admin",
        lastname: "admin",
        address: "Manila",
        postcode: "1870",
        phone: "09123456789",
        email: "admin@admin.com",
        username: "admin",
        password: await hashPassword("admin123"),
        isAdmin: true,
      },
    ];

    // Insert random users
    for (let i = 0; i < 9; i++) {
      const {
        firstName,
        lastName,
        address: { city, zipCode },
        phone,
        email,
        username,
      } = randUser();

      users.push({
        firstname: firstName,
        lastname: lastName,
        address: city,
        postcode: zipCode,
        phone: phone,
        email: email,
        username: username,
        password: await hashPassword(firstName),
        isAdmin: false,
      });
    }

    return queryInterface.bulkInsert("users", users, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
