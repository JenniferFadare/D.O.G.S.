const { Dog } = require('../models')

const dogData = [
    {
        user_id: 1,
        name: 'Seymour', 
        breed: 'Beagle',
        temperament: 'Happy',
    },
    {
        user_id: 2,
        name: 'Nibbler',
        breed: 'Alien',
        temperament: 'Calm',
    }, 
    {
        user_id: 3,
        name: 'Bingo',
        breed: 'Bulldog',
        temperament: 'Aggressive',
    },
    {
        user_id: 4,
        name: 'Lady',
        breed: 'King Charles',
        temperament: 'Calm'
    },
    {
        user_id: 5,
        name: 'Tramp',
        breed: 'JR Terrier',
        temperament: 'energetic',
    },
];

const seedDogs = () => Dog.bulkCreate(dogData);
module.exports = seedDogs;