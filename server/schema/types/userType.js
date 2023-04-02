export const userTypes = `#graphql
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        role: String!
        createdAt: String!
        updatedAt: String!
        address: Address!
        profilePic: String!
        cart: Cart!
        wishlist: Wishlist!
    }

    type Address {
        street: String!
        city: String!
        state: String!
        zip: String!
    } 

    type Query {
        user(id: ID!): User!
        loginUser(email: String!, password: String!): String!
    }

    type Mutation {
        registerUser(
            name: String!, 
            email: String!, 
            password: String!
        ): User!
    }
`
