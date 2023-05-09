const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.user.hasMany(models.post, {
        foreignKey: "user_id",
        targetKey: "user_id",
      });
      models.user.hasOne(models.role, {
        foreignKey: "user_id",
        targetKey: "user_id",
      });
    }
  }
  User.init(
    {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("password", bcrypt.hashSync(value, 10));
        },
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return User;
};
