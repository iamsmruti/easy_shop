export const userTypes = `#graphql
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        createdAt: String!
        updatedAt: String!
        address: Address!
        phone: String!
        profileImage: String
        purchases: [Purchase!]
        cart: [Product!]
    }

    type Purchase {
        id: ID!
        address: Address!
        products: [Product]!
        total: Float!
        status: String!
        createdAt: String!
        updatedAt: String!
    }

    type Address {
        id: ID!
        street: String!
        city: String!
        state: String!
        zipCode: String!
    }

    input inputAddress {
        street: String!
        city: String!
        state: String!
        zipCode: String!
    }

    type Query {
        userLogin(email: String!, password: String!): User!
    }

    type Mutation {
        createUser(
            name: String!,
            email: String!,
            password: String!,
            address: inputAddress!,
            phone: String!,
            profileImage: String
        ): User!

        userRegister(
            name: String!, 
            email: String!, 
            password: String!, 
            address: inputAddress!, 
            phone: String!, 
            profileImage: String
        ): User!

        updateUser(
            name: String!, 
            email: String!, 
            password: String!, 
            address: inputAddress!, 
            phone: String!, 
            profileImage: String
        ): User!
    }
`