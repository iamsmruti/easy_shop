export const wishlistTypes = `#graphql
    type Wishlist {
        userId: ID!
        products: [WishlistItem!]!
    }

    type WishlistItem {
        quantity: String!
        product: Product!
    }

    type Query {
        wishlist: Wishlist!
    }

    type Mutation {
        createWishlist: Wishlist!
        addToWishlist(productId: ID!): Wishlist!
        removeFromWishlist(productId: ID!): Wishlist!
    }
`