const { Dog } = require('../models')

const dogData = [
    {
        user_id: 1,
        name: 'Seymour', 
        breed: 'Beagle',
        temperment: 'Happy',
    },
    {
        user_id: 2,
        name: 'Nibbler',
        breed: 'Alien',
        temperment: 'Calm',
    }, 
    {
        user_id: 3,
        name: 'Bingo',
        breed: 'Bulldog',
        temperment: 'Aggressive',
    },
    {
        user_id: 4,
        name: 'Lady',
        breed: 'King Charles',
        temperment: 'Calm'
    },
    {
        user_id: 5,
        name: 'Tramp',
        breed: 'JR Terrier',
        temperment: 'energetic',
    },
];

const seedDogs = () => Dog.bulkCreate(dogData);
module.exports = seedDogs;