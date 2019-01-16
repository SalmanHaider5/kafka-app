export const DB_TABLE = 'user'
export const KAFKA_TABLE = 'kafka_user'
export const CREATE_DB_TABLE_QUERY = `CREATE TABLE IF NOT EXISTS ${DB_TABLE}(
                                      id int primary key auto_increment,
                                      name varchar(255) not null,
                                      age int 
                                    )`
export const CREATE_KAFKA_TABLE_QUERY = `CREATE TABLE IF NOT EXISTS ${KAFKA_TABLE}(
                                        id int primary key auto_increment,
                                        name varchar(255) not null,
                                        age int 
                                      )`                   