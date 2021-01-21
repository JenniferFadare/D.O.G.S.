const { User } = require('../models');

const userData = [
    {
        username: 'Fry',
        email: 'frozenguy@email.com',
        password: 'deliveryboy',
        city: 'New York',
    },
    {
        username: 'Leila',
        email: 'oneeye@email.com',
        password: 'mutantgirl',
        city: 'San Diego',
    },
    {
        username: 'Zoidberg',
        email: 'crabclaw@email.com',
        password: 'lonelyguy',
        city: 'Chicago',
    },
    {
        username: 'Professor',
        email: 'omyyes@email.com',
        password: 'goodnewseveryone',
        city: 'Dallas',
    },
    {
        username: 'Hermes',
        email: 'limboguy@email.com',
        password: 'hempyousay',
        city: 'Denver',
    },
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;