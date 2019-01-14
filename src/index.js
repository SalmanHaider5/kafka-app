import express from 'express'
import http from 'http'

const app = express()
const PORT = 3000

http.createServer(app).listen(PORT, () => {
  console.log(`Node Server is running on Port ${PORT}`)
})


