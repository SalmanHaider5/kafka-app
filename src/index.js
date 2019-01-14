import express from 'express'
import http from 'http'

import { createTables } from './database'

const app = express()
const PORT = 3000 || window.env

app.get('/', (req, res) => {
  createTables()
  res.send('App initialized...')
})

http.createServer(app).listen(PORT, () => {
  console.log(`Node Server is running on Port ${PORT}`)
})


