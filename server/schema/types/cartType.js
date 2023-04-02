export const cartTypes = `#graphql
    type Cart {
        _id: ID!
        products: [CartItem!]!
    }

    type CartItem {
        _id: ID!
        product: Product!
        quantity: Int!
    }

    type Query {
        cart(id: ID!): Cart!
    }

    type Mutation {
        addToCart(id: ID!): Cart!
        removeFromCart(id: ID!): Cart!
        updateCart(id: ID!, quantity: Int!): Cart!
    }

    type Subscription {
        cartUpdated: Cart!
    }
`