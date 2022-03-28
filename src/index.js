const app = require('./app')

app.express.listen(process.env.APP_PORT || 3002, () => {
  console.log('APP is running [ON] port 3002 - http://localhost:3002')
})
