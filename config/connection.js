require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost:3306/ecommerce_db')

module.exports = sequelize
