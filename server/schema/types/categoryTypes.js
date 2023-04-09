export const categoryTypes = `#graphql
    type Category {
        name: String!
        slug: String!
    }

    type Query {
        categories: [Category!]!
    }

    type Mutation {
        createCategory(name: String!, slug: String!): Category!
        deleteCategory(id: ID!): String!
        updateCategory(id: ID!, name: String!, slug: String!): Category!
    }
`