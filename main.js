

const express = require('express')
const app = express()
const port = 8000


const crypto = require('crypto');

function logRandomBytesTime(start) {

  crypto.randomBytes(4096, () => {
    console.log('Random Bytes time: ', Date.now() - start)
  })
}

app.get('/test', (req, res) => {

  const start = Date.now();
  console.log("=====")
  logRandomBytesTime(start)
  logRandomBytesTime(start)
  logRandomBytesTime(start)
  logRandomBytesTime(start)
  logRandomBytesTime(start)
  logRandomBytesTime(start)
  logRandomBytesTime(start)
  logRandomBytesTime(start)
  logRandomBytesTime(start)
  logRandomBytesTime(start)
  res.send('Hello World!')
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})