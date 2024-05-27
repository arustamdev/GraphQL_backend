// @ts-nocheck

import User from "../models/User";
import Project from "../models/Project";
import { UserArgs, ProjectArgs, CreateProjectArgs } from "./types";
import { Association } from "sequelize";

const root = {
  async users() {
    return await User.findAll({ include: Project });
  },
  async user({ id }: UserArgs) {
    return await User.findOne({ where: { id }, include: Project });
  },
  async projects() {
    return await Project.findAll({ include: User });
  },
  async project({ id }: ProjectArgs) {
    return await Project.findOne({ where: { id }, include: User });
  },
  async createProject({ input: { name, UserId } }: CreateProjectArgs) {
    const project = await Project.create({ name, UserId });
    const User = await project.getUser();
    project.User = User;
    return project;
  },
};

export default root;
