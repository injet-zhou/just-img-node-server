const express = require('express')
const app = express()
require('dotenv').config()

app.get('/api', (req, res) => {
  res.status(400).json({
    error: 'Bad Request',
    message: 'Please provide a valid API key'
  })
})

module.exports = app
