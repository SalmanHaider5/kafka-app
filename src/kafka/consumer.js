import kafka from 'kafka-node'

import { KAFKA_CLIENT_URL, KAFKA_TABLE } from '../constants'
import { postRecordToDatabase } from '../database'

export function postDataFromKafka(){
  const { KafkaClient, Consumer } = kafka,
    client = new KafkaClient(KAFKA_CLIENT_URL),
    topics = [{
      topic: 'kafka-app'
    }],
    options = {},
    consumer = new Consumer(client, topics, options)
  
  consumer.on("message", message => {
    postRecordToDatabase(KAFKA_TABLE, JSON.parse(message.value))
  })
}