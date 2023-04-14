import mongoose from 'mongoose'

const orderHistorySchema = new mongoose.Schema({
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
}, {timestamps: true})

export default mongoose.model('OrderHistory', orderHistorySchema)