import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { CreateUserService } from "services/users.services";

export const CreateUser = async (req: Request, res: Response) => {
  try {
    const user = await CreateUserService(req.body);
    return res.status(201).json(user);
  } catch (e) {
    return res.status(400).json({ message: "Error when creating user!", descripton: (e as Error).message });
  }
};
