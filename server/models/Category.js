import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    slug: {
        type: String,
        default: '',
        unique: true
    }
})

export default mongoose.model('Category', categorySchema)