import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        street: {
            type: String,
            default: '',
        },
        city: {
            type: String,
            default: '',
        },
        state: {
            type: String,
            default: '',
        },
        zipCode: {
            type: String,
            default: '',
        },
    },
    phone: {
        type: String,
        default: '',
    },
    profileImage: {
        type: String,
        default: '',
    },
    purchases: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Purchase',
        },
    ],
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
})

export default mongoose.model('User', UserSchema);