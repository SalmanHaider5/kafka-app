import express from 'express'
import http from 'http'

import { createTables } from './database'
import { postDataToKafka } from './kafka/producer'

const app = express()
const PORT = 3000 || window.env

app.get('/', (req, res) => {
  createTables()
  res.send('App initialized...')
})

app.get('/data/:username', (req, res) => {
  const { params: { username } } = req
  postDataToKafka(username)
})

http.createServer(app).listen(PORT, () => {
  console.log(`Node Server is running on Port ${PORT}`)
})


