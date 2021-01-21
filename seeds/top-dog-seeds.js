const { TopDogs } = require('../models');

const topDogData = [
    {
        user_id: 1,
        dog_id: 5,
    },
    {
        user_id: 2,
        dog_id: 4,
    },
    {
        user_id: 3,
        dog_id: 3,
    },
    {
        user_id: 4,
        dog_id: 2,
    },
    {
        user_id: 5,
        dog_id: 1,
    },

];

const seedTopDogs = () => TopDogs.bulkCreate(topDogData);
module.exports = seedTopDogs;