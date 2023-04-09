export const productTypes = `#graphql
    type Product {
        id: ID!
        name: String!
        description: String!
        price: Float!
        images: [String!]
        category: String!
        createdAt: String!
        updatedAt: String!
        seller: User!
    }

    input ProductUpdateType {
        id: ID!
        name: String!
        description: String!
        price: Float!
        images: [String!]
        category: String!
    }

    type Category {
        id: ID!
        name: String!
        slug: String!
    }

    type Query {
        products: [Product!]!
    }
    
    type Mutation {
        createProduct(
            name: String!,
            description: String! ,
            price: Float!,
            images: [String!],
            category: String!,
            seller: ID!
        ): Product!

        updateProduct(
            name: String!,
            description: String! ,
            price: Float!,
            images: [String!],
            category: String!,
            id: ID!
        ): Product!

        deleteProduct(id: ID!): String!
    }

    type Subscription {
        productCreated: Product!
    }
`