const { Kafka } = require("kafkajs")

const main = async () => {

  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' },
    { id: 5, name: 'User 5' },
    { id: 6, name: 'User 6' },
    { id: 7, name: 'User 7' },
    { id: 8, name: 'User 8' },
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
