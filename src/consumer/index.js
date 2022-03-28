const { Kafka } = require("kafkajs")

const main = async () => {
  const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
  })

  const consumer = kafka.consumer({ groupId: "test-group" })

  await consumer.connect()
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const item = JSON.parse(message.value.toString())
      if (Array.isArray(item) && item.length) {
        item.map(obj => {
          console.log(obj)
        })
      }
    }
  })
}

main()
