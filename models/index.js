const User = require("./user");
const Dog = require("./dog");
const TopDogs = require("./topDogs");

// user has many of their own dogs
User.hasMany(Dog, {
  foreignKey: "user_id",
});

// dog belongs to their owner (user)
Dog.belongsTo(User, {
  foreignKey: "user_id"
});

// user belongs to many dogs (they have their top eight)
User.belongsToMany(Dog, {
  through: TopDogs,
  foreignKey: "user_id"
});

// a single dog belongs to many users (they are on multiple top eights)
Dog.belongsToMany(User, {
  through: TopDogs,
  foreignKey: "dog_id",
});


module.exports = { User, Dog, TopDogs }