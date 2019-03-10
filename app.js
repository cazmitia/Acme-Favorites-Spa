const express = require('express');
const app = express();
const { User, Thing, Favorite } = require('./db/index.js')
const path = require('path');

app.get('/app.js', (req, res, next) => res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/users', (req, res, next) => {
    User.findAll({
        include: {
            model: Favorite,
            include: Thing,
        },
        order: [['name', 'asc'], [Favorite, 'rank', 'asc']]
    })
    .then(users => {res.send(users)})
})

app.get('/api/things', (req, res, next) => {
    Thing.findAll({
        include: {
            model: Favorite,
            include: User,
        },
        order: [['name', 'asc'], [Favorite, 'rank', 'asc']]
    })
    .then(thing => {res.send(thing)})
})

module.exports = app
