export const wishlistTypes = `#graphql
    type Wishlist {
        id: ID!
        products: [WishlistItem!]!
    }

    type WishlistItem {
        id: ID!
        product: Product!
    }

    type Query {
        wishlist(id: ID!): Wishlist!
    }

    type Mutation {
        addToWishlist(id: ID!): Wishlist!
        removeFromWishlist(id: ID!): Wishlist!
    }

    type Subscription {
        wishlistUpdated: Wishlist!
    }
`