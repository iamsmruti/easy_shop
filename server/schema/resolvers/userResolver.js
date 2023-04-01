export const userResolvers = {
    Query: {

    },

    Mutation: {
        userRegister: async (parent, args, { models }) => {
            const { name, email, password, address, phone, profileImage } = args;
            const user = await models.User.create({
                name,
                email,
                password,
                address,
                phone,
                profileImage,
            });
            return user;
        }
    }
}