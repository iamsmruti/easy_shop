import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from "../../models/User.js";
import { loginValidation, registerValidation } from '../../middlewares/validator.js'

export const userResolvers = {
    Query: {
        user: async (parent, args, context, info) => {
            return await User.findById({_id: args.id});
        },

        loginUser:  async (parent, args, context, info) => {
            const { email, password } = args;

            // Validation
            const { error } = loginValidation({ email, password })
            if (error) throw new Error(error.details[0].message)

            // If User with entered Email exists
            const user = await User.findOne({ email: email })
            if (!user) throw new Error({ message: "Incorrect Email" })

            // If exists , the password is checked
            const validPass = await bcrypt.compare(password, user.password)
            if (!validPass) throw new Error({ message: "Incorrect Password" })

            // Create and assign a token
            const token = jwt.sign({
                id: user._id,
                email: user.email,
                role: user.role
            }, process.env.TOKEN_SECRET)

            return token
        }
    },
    Mutation: {
        registerUser: async (parent, args, context, info) => {
            const { name, email, password } = args;

            // Validate the data before we make a user
            const { error } = registerValidation({ name, email, password })
            if (error) throw new Error(error.details[0].message);

            // Hash the password
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            // Saving the new User
            try {
                const user = await User.create({ 
                    name: name, 
                    email: email, 
                    password: hashedPassword 
                });
                
                return user;
            } catch (err) {
                // Check For Duplictaes
                if (err.keyPattern.email) throw new Error("Email Already Exist")
                throw new Error(err)
            }
        },

        updateUser: async (parent, args, context, info) => {
            if(!context.req.isAuth) throw new Error('You must be logged in to perform this action')
            const loggedinUser = context.req.user

            const user = await User.findByIdAndUpdate({_id: loggedinUser.id}, {
                name: args.name,
                address: {
                    street: args.address.street,
                    city: args.address.city,
                    state: args.address.state,
                    zipCode: args.address.zipCode
                },
                profilePic: args.profilePic,
            });

            return user
        }
    },
}