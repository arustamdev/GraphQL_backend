import sequelize from "../db/db";
import User from "../models/User";
import Project from "../models/Project";

async function init() {
  await sequelize.authenticate();

  User.hasMany(Project);
  Project.belongsTo(User);

  await sequelize.sync({ alter: true });
}

export default init;
