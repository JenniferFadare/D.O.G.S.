const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Dog model
class Dog extends Model {};

Dog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    temperment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

module.exports = Dog