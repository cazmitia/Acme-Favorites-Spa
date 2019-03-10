const Sequelize = require('sequelize')
const db = require('./conn')

const User = db.define('user', {
    name: Sequelize.STRING
})

module.exports = User;
