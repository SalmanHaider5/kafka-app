import mysql from 'mysql'

import { GET_KAFKA_RECORDS_QUERY } from '../constants'

const { createConnection } = mysql
const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kafka-app'
})

export function getDataFromKafkaDBTable(req, res){
  
  connection.connect((err) => {
    if(err){
      const { message } = err
      console.log(message)
    }
  })

  connection.query(GET_KAFKA_RECORDS_QUERY, (err, results, fields) => {
    if(err){
      const { message } = err
      console.log(message)
    }else{
      res.json(results)
    }
  })

}  