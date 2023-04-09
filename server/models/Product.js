import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
        unique: true
    },
    description: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: [String],
        default: []
    },
    category: {
        type: String,
        default: ''
    },
    seller: {
        type: String,
        default: ''
    }
})

export default mongoose.model('Product', productSchema)