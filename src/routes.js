const routes = require('express').Router()
const { consumer, producer } = require('./controllers/KafkaController')

consumer()

routes.get('/', (req, res) => {
  return res.json({ msg: 'API OK' })
})

routes.post('/producer', producer)

module.exports = routes
