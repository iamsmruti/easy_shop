import Wishlist from "../../models/Wishlist.js"

export const wishlistResolvers = {
    Query: {
        wishlist: async (parent, args, context, info) => {
            const { id } = context.req.user
            try {
                const wishlist = await Wishlist.find({userId : id})

                if(!wishlist) return []

                return wishlist
            } catch (err) {
                throw new Error(err.message)
            }
        }
    },
    Mutation: {
        createWishlist: async (parent, args, context, info) => {
            const { id } = context.req.user

            try {
                const wishlist = await Wishlist.create({
                    userId: id,
                    products: [{}]
                })

                return wishlist
            } catch (err) {
                throw new Error(err.message)
            }
        },

        addToWishlist: async (parent, args, context, info) => {
            const { id } = context.req.user

            const { productId } = args

            try {
                const wishlist = await Wishlist.find({userId: id})

                // if(wishlist[0].products.contain(productId)){
                //     wishlist.products.map((item) => {
                //         if(item.productId === productId) item.quantity++
                //     })
                // }

                return wishlist
            } catch (err) {
                throw new Error(err.message)
            }
        }
    },
    Subscription: {}
}