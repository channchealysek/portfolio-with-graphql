import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      fullname
      createdAt
      token
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $fullname: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        fullname: $fullname
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      fullname
      username
      createdAt
      token
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation project(
    $title: String!
    $description: String!
    $imageURL: String!
    $githubURL: String!
    $liveURL: String!
  ) {
    project(
      newProjectInput: {
        title: $title
        description: $description
        imageURL: $imageURL
        githubURL: $githubURL
        liveURL: $liveURL
      }
    ) {
      id
      title
      description
      imageURL
      githubURL
      liveURL
      createdAt
    }
  }
`;

export const EDIT_PROJECT = gql`
  mutation updateProject(
    $projectId: ID!
    $title: String!
    $description: String!
    $imageURL: String!
    $githubURL: String!
    $liveURL: String!
  ) {
    updateProject(
      projectId: $projectId
      title: $title
      description: $description
      imageURL: $imageURL
      githubURL: $githubURL
      liveURL: $liveURL
    ) {
      id
      title
      description
      imageURL
      githubURL
      liveURL
      createdAt
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($projectId: ID!) {
    deleteProject(projectId: $projectId)
  }
`;
