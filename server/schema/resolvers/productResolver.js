import Product from '../../models/Product.js'

export const productResolvers = {
    Query: {
        products: async (parent, args, context, info) => {
            const {id, name, description, price, image, category} = args
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
            const {name, description, price, images, category, seller} = args
            try {
                const product = await Product.create({
                    name: name, 
                    description: description,
                    category: category,
                    price: price,
                    images: images,
                    seller: seller
                })

                return product
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