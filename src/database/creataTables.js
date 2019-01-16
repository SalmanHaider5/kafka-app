import mysql from 'mysql'
import { CREATE_DB_TABLE_QUERY, CREATE_KAFKA_TABLE_QUERY } from '../constants'

const { createConnection } = mysql
const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kafka-app'
})

export function createTables(){

  connection.connect((err) => {
    if(err){
      const { message } = err
      console.log(message)
    }
  })

  connection.query(CREATE_DB_TABLE_QUERY, (err, results, fields) => {
    if(err){
      const { message } = err
      console.log(message)
    }else{
      console.log(results, fields)
    }
  })

  connection.query(CREATE_KAFKA_TABLE_QUERY, (err, results, fields) => {
    if(err){
      const { message } = err
      console.log(message)
    }else{
      console.log(results, fields)
    }
  })

}