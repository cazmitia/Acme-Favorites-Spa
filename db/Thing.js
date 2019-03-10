const Sequelize = require('sequelize')
const db = require('./conn')

const Thing = db.define('thing', {
    name: Sequelize.STRING
})

module.exports = Thing;
