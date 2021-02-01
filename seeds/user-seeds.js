const { User } = require('../models');

const userData = [
    {
        username: 'Fry',
        email: 'frozenguy@email.com',
        password: '$2b$10$wfriqjTWgd7n3y4rqFNSEOaf9cGCg5qMRskOYbr6dtLInIxjfJMsS', //deliveryboy
        city: 'New York',
    },
    {
        username: 'Leila',
        email: 'oneeye@email.com',
        password: '$2b$10$d4y/7WGzO/I0hDoS95/Fneyum8Fizghq6gZBC1lrFD3K1D6kyuEdi', //mutantgirl
        city: 'San Diego',
    },
    {
        username: 'Zoidberg',
        email: 'crabclaw@email.com',
        password: '$2b$10$ihC8WoMAfZBzEwFJmDee0OU19Pqz0p4XBr6pwdW8/493HzQuohpTu', //lonelyguy
        city: 'Chicago',
    },
    {
        username: 'Professor',
        email: 'omyyes@email.com',
        password: '$2b$10$l8M3y..NV8KhYP0n639YWOpplUuQX9nYe91F1zc7qOYo5YMwA60kS', //goodnewseveryone
        city: 'Dallas',
    },
    {
        username: 'Hermes',
        email: 'limboguy@email.com',
        password: '$2b$10$/9hh.AYMZPGPqTTUBsG.Ues/Z8X82GQjX87Ca/19iOAXRBwKzDBsy', //hempyousay
        city: 'Denver',
    },
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;