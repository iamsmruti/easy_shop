import Product from '../../models/Product.js'
import User from '../../models/User.js'

export const productResolvers = {
    Query: {
        products: async (parent, args, context, info) => {
            try {
                const products = await Product.find({})

                return products
            } catch (err) {
                throw new Error(err.message)
            }
        }
    },
    Mutation: {
        createProduct: async (parent, args, context, info) => {
            const { id } = context.req.user
            console.log(id)
            const {name, description, price, images, category} = args

            try {
                const seller = await User.find({_id: id})
                console.log(seller)

                const product = await Product.create({
                    name: name, 
                    description: description,
                    category: category,
                    price: price,
                    images: images,
                    seller: id
                })

                const createdProduct = {
                    id: product._id,
                    name: product.name,
                    description: product.description,
                    category: product.category,
                    price: product.price,
                    images: product.images,
                    seller: seller[0]
                }

                return createdProduct
            } catch (err) {
                throw new Error(err.message)
            }
        },

        deleteProduct: async (parent, args, context, info) => {
            const { id } = args

            try {
                await Product.findByIdAndDelete(id)

                return "Product deleted successfully"
            } catch (err) {
                throw new Error(err.message)
            }
        },

        updateProduct: async (parent, args, context, info) => {
            if(context.req.user.id !== args.seller) 
                throw new Error("You can only delete your products")

            const {id, name, description, price, images, category} = args
            try {
                const updatedProduct = await Product.findByIdAndUpdate({_id: id} , {
                    name: name,
                    description: description,
                    price: price,
                    images: images,
                    category: category
                })
                
                return updatedProduct
            } catch (err) {
                throw new Error(err.message)
            }
        }
    },
    Subscription: {}
}