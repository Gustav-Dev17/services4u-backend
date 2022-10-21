import bcrypt from "bcryptjs";
import { IRequestUserBody, IUser } from "../types/user.body.types";
import { CreateUsersRepo } from "../repositories/users.repository";

export const CreateUserService = (body: IUser) => {
  try {
    body.password = bcrypt.hashSync(body.password, 8); //hashing from IUser.password
    return CreateUsersRepo(body);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};