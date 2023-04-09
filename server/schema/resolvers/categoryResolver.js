import Category from '../../models/Category.js'

export const categoryResolver = {
    Query: {
        categories: async (parent, args, context, info) => {
            try {
                const categories = await Category.find({})
                return categories
            } catch (err) {
                throw new Error(err.message)
            }
        }
    },
    Mutation: {
        createCategory: async (parent, args, context, info) => {
            const { name, slug } = args
            try {
                const newCategory = await Category.create({
                    name: name,
                    slug: slug
                })

                return newCategory
            } catch (err) {
                if(err.message.includes('duplicate'))
                    throw new Error("Category Already Exists")
                else 
                    throw new Error(err.message)
            }
        },

        updateCategory: async (parent, args, context, info) => {
            const {id, name, slug} = args
            try {
                const updatedCategory = await Category.findByIdAndUpdate({_id: id},{
                    name: name,
                    slug: slug
                })

                return updatedCategory
            } catch (err) {
                throw new Error(err.message)
            }
        },

        deleteCategory: async (parent, args, context, info) => {
            const { id } = args
            
            try {
                await Category.findByIdAndDelete(id)

                return "Selected category deleted"
            } catch (err) {
                throw new Error(err.message)
            }
        }
    }
}