const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Comment extends Model {}
Comment.init(schema, options);

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "User",
      key: "id",
    },
  },

  BlogId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Blog",
      key: "id",
    },
  },
};

const options = {
  sequelize,
  modelName: "Comment",
  freezeTableName: true,
  underscored: true,
  underscored: true,
};

module.exports = Comment;
