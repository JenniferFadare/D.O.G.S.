const { Dog } = require('../models')

const dogData = [
    {
        name: 'Seymour', 
        breed: 'Beagle',
        temperment: 'Happy',
    },
    {
        name: 'Nibbler',
        breed: 'Alien',
        temperment: 'Calm',
    }, 
    {
        name: 'Bingo',
        breed: 'Bulldog',
        temperment: 'Aggressive',
    },
    {
        name: 'Lady',
        breed: 'King Charles',
        temperment: 'Calm'
    },
    {
        name: 'Tramp',
        breed: 'JR Terrier',
        temperment: 'energetic',
    },
];

const seedDogs = () => Dog.bulkCreate(dogData);
module.exports = seedDogs;