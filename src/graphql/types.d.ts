export type UserArgs = {
  id: number;
};
export type ProjectArgs = {
  id: number;
};
export type CreateProjectArgs = {
  input: {
    name: string;
    UserId: number;
  };
};
export type CreateUserArgs = {
  input: {
    firstName: string;
    lastName?: string;
  };
};
export type User = {
  firstName: string;
  lastName?: string;
  Project: Project[];
};
export type Project = {
  name: string;
  User: User;
};
