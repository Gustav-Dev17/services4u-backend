import prisma from "services/prisma.services";
import { IUser, IRequestUserBody } from "types/user.body.types";

export const CreateUsersRepo = (body: IUser) => {
  return prisma.users.create({ data: body });
};
