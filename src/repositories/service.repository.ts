import prisma from "services/prisma.services";
import { IService, IRequestServiceBody } from "types/service.body.types";

export const CreateServicesRepo = (body: IService) => {
  return prisma.services.create({ data: body });
};

export const ReadServiceByID = (id: string) => {
  try {
    return prisma.services.findUnique({ where: { id } });
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const ReadServices = () => {
  try {
    return prisma.services.findMany();
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const ReadServicesByUser = (userId: string) => {
  try {
    return prisma.services.findMany({
      where: { userId },
      orderBy: { title: "asc" },
    });
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const UpdateService = (body: IRequestServiceBody, id: string) => {
    try {
      return prisma.services.update({
        where: { id },
        data: body,
      });
    } catch (e) {
      throw new Error((e as Error).message);
    }
  };
  
  export const DeleteService = (id: string) => {
    try {
      return prisma.services.delete({ where: { id } });
    } catch (e) {
      throw new Error((e as Error).message);
    }
  };
