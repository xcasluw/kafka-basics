const { Kafka } = require("kafkajs")

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
})

class KafkaController {
  async consumer () {
    const consumer = kafka.consumer({ groupId: "test-group" })
    await consumer.connect()
    await consumer.subscribe({ topic: "test-topic", fromBeginning: true })
  
    console.log('Consumer Ready')
  
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const item = JSON.parse(message.value.toString())
        console.log(item)
      }
    })
  }

  async producer (request, response) {
    const data = request.body
  
    const producer = kafka.producer({
      allowAutoTopicCreation: false,
      transactionTimeout: 30000
    })
  
    await producer.connect()
  
    await producer.send({
      topic: "test-topic",
      messages: [
        { key: 'users', value: JSON.stringify(data) }
      ],
    })
  
    await producer.disconnect()
    return response.status(200).json({ msg: 'Process completed'})
  }
}

module.exports = new KafkaController()
