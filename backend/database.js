const Sequelize = require("sequelize");

const config = require("./config/config");
const dbConfig = config["development"];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.log("Unable to connect to the database:", err);
  }
})();

module.exports = sequelize;
