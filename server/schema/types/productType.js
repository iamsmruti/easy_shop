export const productTypes = `#graphql
    type Product {
        id: ID!
        name: String!
        description: String!
        price: Float!
        image: String!
        category: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        products: [Product!]!
    }
    
    type Mutation {
        createProduct(name: String!, description: String!, price: Float!, image: String!, category: String!): Product!
    }

    type Subscription {
        productCreated: Product!
    }
`