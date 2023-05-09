const dbConfig = require("../DB/db-config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
  }
);

const db = {};
db.sequelize = sequelize;
db.model = {};
db.model.User = require("./user.model")(sequelize, Sequelize.DataTypes);
db.model.Post = require("./post.model")(sequelize, Sequelize.DataTypes);
db.model.Role = require("./role.model")(sequelize, Sequelize.DataTypes);

module.exports = db;
