const { Kafka } = require("kafkajs")

const main = async () => {

  const users = [
    { id: 1, name: 'User 1' }
  ]

  const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
  })

  const producer = kafka.producer({
    allowAutoTopicCreation: false,
    transactionTimeout: 30000
  })

  await producer.connect()

  await producer.send({
    topic: "test-topic",
    messages: [
      { key: 'users', value: JSON.stringify(users) }
    ],
  })

  await producer.disconnect()
}

main()
