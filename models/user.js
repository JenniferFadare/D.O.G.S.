const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcript = require("bcrypt");

class User extends Model {
  // set up method to run on instance data to check password
  checkPassword(loginPw) {
    return bcript.compareSync(loginPw);
  }
}

User.init(
  {
    // columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4],
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
  },
  {
    // table configuration option
    hooks: {
      // set up beforecreate/update "hook" functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcript.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcript.hash(
          updatedUserData.password,
          10
        );
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;