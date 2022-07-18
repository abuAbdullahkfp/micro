import {Kafka} from 'kafkajs'

const kafka = new Kafka({
  clientId: "simple-producer-consumer-application",
  brokers: ['kafka-0.kafka-headless.default.svc.cluster.local:9092']
})

const producerRun = async () => {
  const producer = kafka.producer()

  await producer.connect()

  
}