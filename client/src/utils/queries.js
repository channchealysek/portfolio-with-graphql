import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query {
    getUser {
      id
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query {
    getProjects {
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

export const QUERY_PROJECT = gql`
  query ($projectId: ID!) {
    getProject(projectId: $projectId) {
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
