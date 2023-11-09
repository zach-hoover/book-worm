const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, { _id, username }) => {
            const params = _id ? {_id} : username ? {username} : {}
            const foundUser = await User.findOne(params)
            if (!foundUser) {
                throw new Error('Cannot find a user with this id or username');
              }
            return foundUser
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);

            if (!user) {
                throw new Error('Something is wrong!')
            }
            const token = signToken(user);
            return { user, token }
        },
        login: async (parent, { _id, username, password }) => {
            const params = _id ? {_id} : username ? {username} : {}
            const user = await User.findOne(params)
            if (!user) {
                throw new Error('Cannot find a user with this id or username');
            }
            
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new Error('Wrong password!')
            }
            const token = signToken(user);
            return { user, token }
        },
        saveBook: async (parent, { userId, bookInput } ) => {
            // Perform the saveBook operation here
            const updatedUser = await User.findOneAndUpdate(
              { _id: userId },
              { $addToSet: { savedBooks: bookInput } },
              { new: true, runValidators: true }
            );
            return updatedUser;
          },
          deleteBook: async (parent, { userId, bookId }) => {
            // Perform the deleteBook operation here
            const updatedUser = await User.findOneAndUpdate(
              { _id: userId },
              { $pull: { savedBooks: { bookId: bookId } } },
              { new: true }
            );
            if (!updatedUser) {
              throw new Error("Couldn't find user with this id");
            }
            return updatedUser;
          },
    }
}

module.exports = resolvers