const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      models.post.belongsTo(models.user, {
        foreignKey: "user_id",
        targetKey: "user_id",
      });
    }
  }
  Post.init(
    {
      post_id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return Post;
};
