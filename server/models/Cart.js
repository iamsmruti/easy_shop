import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [{
        quantity: {
            type: Number,
            default: 1
        },
        productId: {
            type: String,
            required: true,
        }
    }]
})

export default mongoose.model('Cart', cartSchema)