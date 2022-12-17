const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    fullname: String!
    createdAt: String!
    token: String!
  }

  type Project {
    id: ID!
    title: String!
    description: String!
    imageURL: String!
    githubURL: String!
    liveURL: String!
    createdAt: String!
  }

  type Query {
    getUser: [User]
    getProjects: [Project]
    getProject(projectId: ID!): Project
  }

  input RegisterInput {
    username: String!
    fullname: String!
    password: String!
    confirmPassword: String!
  }

  input NewProjectInput {
    title: String!
    description: String!
    imageURL: String!
    githubURL: String!
    liveURL: String!
  }

  input EditProjectInput {
    title: String!
    description: String!
    imageURL: String!
    githubURL: String!
    liveURL: String!
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    project(newProjectInput: NewProjectInput): Project!
    updateProject(
      projectId: ID!
      title: String!
      description: String!
      imageURL: String!
      githubURL: String!
      liveURL: String!
    ): Project!
    deleteProject(projectId: ID!): String!
  }
`;

module.exports = typeDefs;
