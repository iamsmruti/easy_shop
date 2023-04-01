export const productResolvers = {
    Query: {
        products: async (parent, args, { models }) => {
            const products = await models.Product.findAll();
            return products;
        }
    },
    
    Mutation: {
        createProduct: async (parent, args, { models }) => {
            const { name, description, price, image, category } = args;
            const product = await models.Product.create({
                name,
                description,
                price,
                image,
                category,
            });
            return product;
        }
    },

    Subscription: {
        productCreated: {
            subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('PRODUCT_CREATED')
        }
    }
}