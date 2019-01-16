import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'

import { createTables, postRecordToDatabase } from './database'
import { postDataToKafka, postDataFromKafka } from './kafka'
import { DB_TABLE } from './constants'

const app = express()
app.use(bodyParser.json())
const PORT = 3000

app.get('/', (req, res) => {
  createTables()
  res.send('App initialized...')
})

app.post('/data', (req, res) => {
  const { body } = req
  postRecordToDatabase(DB_TABLE, body)
  postDataToKafka(body)
  postDataFromKafka()
  //getDataFromKafkaDBTable()
})

http.createServer(app).listen(PORT, () => {
  console.log(`Node Server is running on Port ${PORT}`)
})


