let redis  = require('redis')
let client = redis.createClient();

client.on('error', err => console.log('Error: ' + err))

client.set("hello", 'world')
client.quit()
