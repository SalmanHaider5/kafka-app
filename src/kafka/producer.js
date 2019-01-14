import kafka from 'kafka-node'

import { KAFKA_CLIENT_URL } from '../constants'

export function postDataToKafka(data){
  let client = new kafka.Client('http://localhost:2181')
  const producer = new kafka.HighLevelProducer(client)
  producer.on("ready", () => {
    console.log('Producer is ready and connected.')
  })
}