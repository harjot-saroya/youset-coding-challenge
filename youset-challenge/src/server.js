const express = require('express')
var cors = require('cors')

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.post('/www.example.com', (req, res) => {
    res.send({ troll: 'Hello World!' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})