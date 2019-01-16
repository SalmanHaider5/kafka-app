import kafka from 'kafka-node'

import { KAFKA_CLIENT_URL } from '../constants'

export function postDataToKafka(user){
  const { KafkaClient, HighLevelProducer, KeyedMessage } = kafka,
    client = new KafkaClient(KAFKA_CLIENT_URL),
    producer = new HighLevelProducer(client),
    payloads = [{
      topic: 'kafka-app',
      messages: JSON.stringify(user)
    }]

  producer.on("ready", () => {
    console.log('Producer is ready and connected.')
    producer.send(payloads, (err, data) => {
      if(err)
        console.log('Error:', err)
      else
        console.log('Data:', data)
    })
  })

  producer.on("error", error => {
    console.log('Error:',error)
  })

}