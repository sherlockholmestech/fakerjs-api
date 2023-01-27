const express = require('express')
const app = express()
const port = 8001

app.get('/words/10', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})