import mongoose from 'mongoose'

const wishlistSchema = new mongoose.Schema({
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
        }
    }]
})

export default mongoose.model('Wishlist', wishlistSchema)