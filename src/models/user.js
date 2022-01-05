const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

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
  moduleName: "user",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
};

class User extends Model {}

module.exports = User;
