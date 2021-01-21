const dog = require('./dog-seeds');
const topDog = require('./top-dog-seeds');
const user = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await user();
  console.log('\n----- USER SEEDED -----\n');
  await dog();
  console.log('\n----- DOG SEEDED -----\n');
  await topDog();
  console.log('\n----- TOPDOG SEEDED -----\n');
  process.exit(0);
};

seedAll();