import { IRequestServiceBody, IService } from "../types/service.body.types";
import { CreateServicesRepo, ReadServiceByID, ReadServices, ReadServicesByUser, UpdateService, DeleteService } from "../repositories/service.repository";

export const CreateServiceService = async (body: IService, id: string) => {
  try {
    return CreateServicesRepo(body);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
export const ListServiceService = (id: string) => {
  try {
    return ReadServiceByID(id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const ListServicesService = () => {
  try {
    return ReadServices();
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const ListServicesByUserService = (id: string) => {
  try {
    return ReadServicesByUser(id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const UpdateServiceService = async (body: IRequestServiceBody, id: string) => {
  try {
    const service = await ReadServiceByID(id);
    const title = body.title || service?.title;
    const description = body.description || service?.description;
    const location = body.location || service?.location;
    const price = body.price || service?.price;
    const service_area = body.service_area || service?.service_area;
    return UpdateService({ title, description, location, price, service_area }, id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const DeleteServiceService = (id: string) => {
  try {
    return DeleteService(id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
