import { Sequelize } from "sequelize";

const sequelize = new Sequelize("GraphQLDB", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
