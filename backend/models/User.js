const Sequelize = require("sequelize");
const sequelize = require("../database");

module.exports = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: Sequelize.STRING(30),
  lastname: Sequelize.STRING(30),
  address: Sequelize.STRING(175),
  postcode: Sequelize.STRING(15),
  phone: Sequelize.STRING(30),
  email: Sequelize.STRING(75),
  username: Sequelize.STRING(30),
  password: Sequelize.STRING(175),
  isAdmin: Sequelize.BOOLEAN,
});
