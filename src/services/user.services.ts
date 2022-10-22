import bcrypt from "bcryptjs";
import { IUser, IRequestUserBody } from "types/user.body.types";
import { CreateUsersRepo, ReadUserByID, ReadUsers, UpdateUser, DeleteUser } from "repositories/user.repository";

export const CreateUsersService = (body: IUser) => {
  try {
    body.password = bcrypt.hashSync(body.password, 8);
    return CreateUsersRepo(body);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const ListUserService = (id: string) => {
  try {
    return ReadUserByID(id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const ListUsersService = () => {
  try {
    return ReadUsers();
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const UpdateUserService = async (body: IRequestUserBody, id: string) => {
  try {
    const user = await ReadUserByID(id);
    const name = body.name || user?.name;
    const email = body.email || user?.email;
    const phone = body.phone || user?.phone;
    const work_area = body.work_area || user?.work_area;
    const decryptedPassword = body.password || user?.password; //hashing from IRequestUserBody.password
    const password = bcrypt.hashSync(decryptedPassword as string, 8);
    return UpdateUser({ name, email, phone, work_area, password }, id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const DeleteUsersService = (id: string) => {
  try {
    return DeleteUser(id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

