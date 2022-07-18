import {Kafka} from 'kafkajs'

const kafka = new Kafka({
  clientId: "ticketing",
  brokers: ["kafka-0.kafka-headless.default.svc.cluster.local:9092"],
}); 
 
const runProducer = async () => {
  const producer = kafka.producer()
  await producer.connect()
 
  const data = {
    id: "123",
    title: "concert",
    price: 20, 
  };
 
 await producer
   .send({
     topic: "ticket-created",
     messages: [
       {
         value: JSON.stringify(data),
       },
     ],
   })
   .then(() => console.log("Event published"));

}

runProducer()

const runConsumer = async () => {
  console.log("consumer start");

  const consumer = kafka.consumer({
    groupId: "ticket-created",
  });
  await consumer.connect();
  await consumer.subscribe({
    topic: "ticket-created",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async (result) => {
      console.log(result.message.value!.toString());
    }, 
  });
};

runConsumer();