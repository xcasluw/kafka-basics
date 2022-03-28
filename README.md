# Node + Kafka (Basics)

A kafka producer/consumer proof of concept using node.

![Screen Shot 2022-03-28 at 16 15 58](https://raw.githubusercontent.com/xcasluw/kafka-basics/main/node-kafka-terminal.png)

## Prerequisites

* `node`
* `docker`

## Running locally

* `npm install` - installs npm dependencies.
* `docker-compose up` - creates kafka and zookeeper containers.
* `npm start` - starts the server and the consumer method
* `http://localhost:3002/producer` - endpoint to produce