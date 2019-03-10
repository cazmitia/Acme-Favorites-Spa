const Sequelize = require('sequelize')
const db = require('./conn')

const Favorite = db.define('favorite', {
    rank: Sequelize.INTEGER
})

module.exports = Favorite;
