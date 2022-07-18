import {Kafka} from 'kafkajs'

const run = async () => {

  try {

    const kafka = new Kafka({
      clientId: "ticketing",
      brokers: ["kafka-0.kafka-headless.default.svc.cluster.local:9092"],
    });

    const admin = kafka.admin()

    await admin.connect().then(() => console.log('connected'))

    admin.createTopics({
      topics: [{
        topic: "ticket-created",
        numPartitions: 2
      }]
    })

  } catch(error) {

  }

}