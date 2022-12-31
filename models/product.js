const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    desc: String,
    countInStock: {
        type: Number,
        required: true,
    },
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product
