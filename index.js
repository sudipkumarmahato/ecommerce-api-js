const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

port = process.env.PORT || 5000
api = process.env.API_URL
// console.log(api)
//routes
app.get(api + '/products', (req, res) => {
  res.send('Hello API')
})

//listener
const server = app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})
