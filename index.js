//import require modules
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const cors = require('cors')
//import routes
const productsRoute = require('./routes/products')

//app
const app = express()

port = process.env.PORT || 5000
api = process.env.API_URL

//middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())
app.options('*', cors())

//db
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Database Connected Successfully')
    })
    .catch((err) => {
        console.log(err)
        console.log('Database Not Connected')
    })


//routes
app.use(`${api}/products`, productsRoute)

//listener
app.listen(port, () => {
    console.log(api)
    console.log(`server is running at http://localhost:${port}`)
})


// localhost:3000/api/v1/products