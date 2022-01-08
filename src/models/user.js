const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class User extends Model {}
User.init(schema, options);

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [2, 20],
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  sequelize,
  moduleName: "User",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
};

module.exports = User;
