import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { CreateUsersService, ListUserService, ListUsersService, UpdateUserService, DeleteUsersService } from "../services/user.services";

export const CreateUser = async (req: Request, res: Response) => {
  try {
    const user = await CreateUsersService(req.body);
    return res.status(201).json(user);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return res.status(409).json({ message: "Email ou Telefone já pertencem a outro usuário!" });
      }
    }
    return res.status(400).json({ message: "Erro ao criar o usuário!", descripton: (e as Error).message });
  }
};

export const ReadUser = async (req: Request, res: Response) => {
  try {
    //const { id } = req;
    const user = await ListUserService(req.params.id);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(400).json({ message: "Erro ao listar o usuário!", descripton: (e as Error).message });
  }
};

export const ReadAllUsers = async (__: Request, res: Response) => {
  try {
    const users = await ListUsersService();
    return res.status(200).json(users);
  } catch (e) {
    return res.status(400).json({ message: "Erro ao listar os usuários!", descripton: (e as Error).message });
  }
};

export const UpdateUser = async (req: Request, res: Response) => {
  try {
   // const { id } = req;
    const user = await UpdateUserService(req.body, req.params.id);
    return res.status(200).json(user);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return res.status(409).json({ message: "Email ou Telefone já pertencem a outro usuário!" });
      }
      if (e.code === "P2023") {
        return res.status(409).json({ message: "id deformado!" });
      }
      if (e.code === "P2025") {
        return res.status(409).json({ message: "Usuário não existe!" });
      }
    }
    return res.status(400).json({ message: "Erro ao atualizar o usuário!", descripton: (e as Error).message });
  }
};

export const DeleteUser = async (req: Request, res: Response) => {
  try {
    // const { id } = req;
    const user = await DeleteUsersService(req.params.id);
    return res.status(204).json(user);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2023") {
        return res.status(409).json({ message: "id deformado!" });
      }
      if (e.code === "P2025") {
        return res.status(409).json({ message: "Usuário não existe!" });
      }
    }
    return res.status(400).json({ message: "Erro ao deletar o usuário!", descripton: (e as Error).message });
  }
};
