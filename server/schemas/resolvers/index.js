const usersResolvers = require("./users");
const projectResolver = require("./projects");
module.exports = {
  Query: {
    ...usersResolvers.Query,
    ...projectResolver.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...projectResolver.Mutation
  },
};