import { buildSchema } from "graphql";

const schema = buildSchema(/* GraphQL */ `
  type User {
    id: Int!
    firstName: String!
    lastName: String
    Projects: [Project]
  }

  type Project {
    id: Int!
    name: String!
    User: User
  }

  input CreateProjectInput {
    name: String!
    UserId: Int!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String
  }

  type Query {
    users: [User]
    user(id: Int!): User

    project(id: Int!): Project
    projects: [Project]
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project
    createUser(input: CreateUserInput!): User
  }
`);

export default schema;
