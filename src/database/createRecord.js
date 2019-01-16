import mysql from 'mysql'

const { createConnection } = mysql
const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kafka-app'
})

export function postRecordToDatabase(table, data){
  const { username, age } = data
  const query = `INSERT INTO ${table} (id, name, age) VALUES(default, '${username}', ${age})`
  
  connection.connect((err) => {
    if(err){
      const { message } = err
      console.log(message)
    }
  })

  connection.query(query, (err, results, fields) => {
    if(err){
      const { message } = err
      console.log(message)
    }else{
      console.log(results, fields)
    }
  })

}  