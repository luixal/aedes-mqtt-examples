const SERVER = 'mqtt://localhost'
const TOPIC = 'main'

let mqtt = require('mqtt')
let client = mqtt.connect(SERVER)

const log = (text) => {
  console.log(`[${new Date().toLocaleString()}] ${text}`)
}

client.on(
  'connect',
  (message) => {
    log(`Connected to ${SERVER}`)
    client.subscribe('main')
    client.publish('main', 'Hi there!')
  }
)

client.on(
  'message',
  (topic, message) => {
    log(`Message received on topic ${topic}: ${message.toString()}`)
  }
)
