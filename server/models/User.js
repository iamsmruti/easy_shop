import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
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
    }
})

export default mongoose.model('User', UserSchema);