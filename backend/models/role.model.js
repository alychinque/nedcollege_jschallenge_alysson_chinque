const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      models.role.belongsTo(models.user, {
        foreignKey: "user_id",
        targetKey: "user_id",
      });
    }
  }
  Role.init(
    {
      role_id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "role",
    }
  );
  return Role;
};
