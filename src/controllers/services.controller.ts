import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { CreateServiceService, ListServiceService, ListServicesService, ListServicesByUserService, UpdateServiceService, DeleteServiceService} from "../services/service.services";

export const CreateService = async (req: Request, res: Response) => {
  try {
    const { id } = req;
    req.body.userId = id;
    const service = await CreateServiceService(req.body, id);
    return res.status(201).json(service);
  } catch (e) {
    return res.status(400).json({ message: "Erro ao criar serviço!", descripton: (e as Error).message });
  }
};
export const ReadService = async (req: Request, res: Response) => {
    try {
      const service = await ListServiceService(req.params.id);
      return res.status(200).json(service);
    } catch (e) {
      return res.status(400).json({ message: "Erro ao listar serviço!", descripton: (e as Error).message });
    }
  };
  
  export const ReadAllServices = async (req: Request, res: Response) => {
    try {
      const services = await ListServicesService();
      return res.status(200).json(services);
    } catch (e) {
      return res.status(400).json({ message: "Erro ao listar serviços!", descripton: (e as Error).message });
    }
  };
  
  export const ReadServicesByUser = async (req: Request, res: Response) => {
    try {
      const { id } = req;
      req.body.userId = id;
      const services = await ListServicesByUserService(id);
      return res.status(200).json(services);
    } catch (e) {
      return res.status(400).json({ message: "Erro ao listar serviços do usuário!", descripton: (e as Error).message });
    }
  };
  
  export const UpdateService = async (req: Request, res: Response) => {
    try {
      const service = await UpdateServiceService(req.body, req.params.id);
      return res.status(200).json(service);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2023") {
          return res.status(409).json({ message: "Id Deformado!" });
        }
        if (e.code === "P2025") {
          return res.status(409).json({ message: "Serviço não existente!" });
        }
      }
      return res.status(400).json({ message: "Erro ao atualizar serviço!", descripton: (e as Error).message });
    }
  };
  
  export const DeleteService = async (req: Request, res: Response) => {
    try {
      await DeleteServiceService(req.params.id);
      return res.status(204).json();
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2023") {
          return res.status(409).json({ message: "Id Deformado!" });
        }
        if (e.code === "P2025") {
          return res.status(409).json({ message: "Serviço não existente!" });
        }
      }
      return res.status(400).json({ message: "Erro ao deletar serviço!", descripton: (e as Error).message });
    }
  };