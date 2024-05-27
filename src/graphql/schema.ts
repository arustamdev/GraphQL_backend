import { buildSchema } from "graphql";

const schema = buildSchema(/* GraphQL */ `
  type User {
    firstName: String!
    lastName: String
    Projects: [Project]
  }

  type Project {
    name: String!
    User: User
  }

  input CreateProjectInput {
    name: String!
    UserId: Int!
  }

  type Query {
    users: [User]
    user(id: Int!): User

    project(id: Int!): Project
    projects: [Project]
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project
  }
`);

export default schema;
