const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
  res.sendFile('home.html', { root: path.join(__dirname, 'pages') })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
