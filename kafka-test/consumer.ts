import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "ticketing",
  brokers: ["kafka.default.svc.cluster.local:9092"],
}); 
 
const runConsumer = async () => {

  console.log('consumer start')

   const consumer = kafka.consumer({
     groupId: 'ticket-created'
   })
   await consumer.connect()
   await consumer.subscribe({
     topic: "ticket-created",
     fromBeginning: true
   })

  await consumer.run({
    eachMessage: async (result) => {
      console.log(result.message.value.toString())
    }
  })
  
}

runConsumer()