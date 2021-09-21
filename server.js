const express = require('express')
const sequelize = require('./config/connection.js')
// import sequelize connection

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))



// sync sequelize models to the database, then turn on the server
sequelize.sync({})
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))

