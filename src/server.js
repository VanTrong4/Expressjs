const webRoutes = require('./route/webRoutes')

const express = require('express')
const connectDB = require('./config/connectDB')


require('dotenv').config()
const app = express()
const port = process.env.port

connectDB()

webRoutes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
